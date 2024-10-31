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

// Create the UserStateContext
const UserStateContext = createContext();

// Provider component
export const UserStateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const results = await db.select().from(Users).execute();
      setUsers(results);
    } catch (error) {
      setError("Error fetching users");
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUserByEmail = useCallback(async (email) => {
    setLoading(true);
    try {
      const result = await db
        .select()
        .from(Users)
        .where(eq(Users.createdBy, email))
        .execute();

      setCurrentUser(result.length > 0 ? result[0] : "user-not-found");
    } catch (error) {
      setError("Error fetching user by email");
      console.error("Error fetching user by email", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (userData) => {
    setLoading(true);
    try {
      const newUser = await db
        .insert(Users)
        .values(userData)
        .returning()
        .execute();

      setUsers((prevUsers) => [...prevUsers, newUser[0]]);
      setCurrentUser(newUser[0]);
      return newUser[0];
    } catch (error) {
      setError("Error creating user");
      console.error("Error creating user", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUserRecords = useCallback(async (userEmail) => {
    setLoading(true);
    try {
      const result = await db
        .select()
        .from(Records)
        .where(eq(Records.createdBy, userEmail))
        .execute();
      setRecords(result);
    } catch (error) {
      setError("Error fetching user records");
      console.error("Error fetching user records", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createRecord = useCallback(async (recordData) => {
    setLoading(true);
    try {
      const newRecord = await db
        .insert(Records)
        .values(recordData)
        .returning({ id: Records.id })
        .execute();
      setRecords((prevRecords) => [...prevRecords, newRecord[0]]);
      return newRecord[0];
    } catch (error) {
      setError("Error creating record");
      console.error("Error creating record", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateRecord = useCallback(async (recordData) => {
    setLoading(true);
    try {
      const { documentID, ...dataToUpdate } = recordData;
      const result = await db
        .update(Records)
        .set(dataToUpdate)
        .where(eq(Records.id, documentID))
        .returning()
        .execute();

      if (result.length > 0) {
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === documentID ? { ...record, ...dataToUpdate } : record,
          ),
        );
        return result[0];
      }
      return null;
    } catch (error) {
      setError("Error updating record");
      console.error("Error updating record", error);
      return null;
    } finally {
      setLoading(false);
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
      loading,
      error,
    }),
    [users, records, currentUser, loading, error],
  );

  return (
    <UserStateContext.Provider value={contextValue}>
      {children}
    </UserStateContext.Provider>
  );
};

// Custom hook to use the UserStateContext
export const useUserStateContext = () => useContext(UserStateContext);
