import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";
import { db } from "../utils/dbConfig";
import { Users, Records } from "../utils/schema";
import { eq } from "drizzle-orm";

const UserStateContext = createContext();

export const UserStateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = useCallback(async () => {
    let loading = true;
    let error = null;

    try {
      const results = await db.select().from(Users).execute();
      setUsers(results);
    } catch (err) {
      error = "Error fetching users";
      console.error(error, err);
    } finally {
      loading = false;
    }

    return { loading, error };
  }, []);

  const fetchUserByEmail = useCallback(async (email) => {
    let loading = true;
    let error = null;

    try {
      const result = await db
        .select()
        .from(Users)
        .where(eq(Users.createdBy, email))
        .execute();
      setCurrentUser(result.length > 0 ? result[0] : "user-not-found");
    } catch (err) {
      error = "Error fetching user by email";
      console.error(error, err);
    } finally {
      loading = false;
    }

    return { loading, error };
  }, []);

  const createUser = useCallback(async (userData) => {
    let loading = true;
    let error = null;

    try {
      const newUser = await db
        .insert(Users)
        .values(userData)
        .returning()
        .execute();
      setUsers((prevUsers) => [...prevUsers, newUser[0]]);
      setCurrentUser(newUser[0]);
      return { user: newUser[0], loading: false, error: null };
    } catch (err) {
      error = "Error creating user";
      console.error(error, err);
      return { user: null, loading: false, error };
    }
  }, []);

  const fetchUserRecords = useCallback(async (userEmail) => {
    let loading = true;
    let error = null;

    try {
      const result = await db
        .select()
        .from(Records)
        .where(eq(Records.createdBy, userEmail))
        .execute();
      setRecords(result);
    } catch (err) {
      error = "Error fetching user records";
      console.error(error, err);
    } finally {
      loading = false;
    }

    return { loading, error };
  }, []);

  const createRecord = useCallback(async (recordData) => {
    let loading = true;
    let error = null;

    try {
      const newRecord = await db
        .insert(Records)
        .values(recordData)
        .returning({ id: Records.id })
        .execute();
      setRecords((prevRecords) => [...prevRecords, newRecord[0]]);
      return { record: newRecord[0], loading: false, error: null };
    } catch (err) {
      error = "Error creating record";
      console.error(error, err);
      return { record: null, loading: false, error };
    }
  }, []);

  const updateRecord = useCallback(async (recordData) => {
    let loading = true;
    let error = null;

    try {
      const { documentID, ...dataToUpdate } = recordData;
      const updatedRecords = await db
        .update(Records)
        .set(dataToUpdate)
        .where(eq(Records.id, documentID))
        .returning();
      setRecords((prevRecords) =>
        prevRecords.map((record) =>
          record.id === documentID ? { ...record, ...dataToUpdate } : record
        )
      );
      return { success: true, loading: false, error: null };
    } catch (err) {
      error = "Error updating record";
      console.error(error, err);
      return { success: false, loading: false, error };
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      users,
      records,
      fetchUsers,
      fetchUserByEmail,
      createUser,
      fetchUserRecords,
      createRecord,
      currentUser,
      updateRecord,
    }),
    [users, records, currentUser]
  );

  return (
    <UserStateContext.Provider value={contextValue}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUserStateContext = () => useContext(UserStateContext);
