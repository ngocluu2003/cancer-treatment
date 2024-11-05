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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (err, customMessage = "An error occurred") => {
    console.error(customMessage, err);
    setError(customMessage);
  };

  const fetchUserByEmail = useCallback(async (email) => {
    setLoading(true);
    setError(null);
    try {
      const result = await db
        .select()
        .from(Users)
        .where(eq(Users.createdBy, email))
        .execute();
      setCurrentUser(result.length > 0 ? result[0] : "user-not-found");
    } catch (err) {
      handleError(err, "Failed to fetch user by email");
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
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
      handleError(err, "Failed to create user");
      return { user: null, loading: false, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUserRecords = useCallback(async (userEmail) => {
    setLoading(true);
    setError(null);
    try {
      const result = await db
        .select()
        .from(Records)
        .where(eq(Records.createdBy, userEmail))
        .execute();
      setRecords(result);
    } catch (err) {
      handleError(err, "Failed to fetch user records");
    } finally {
      setLoading(false);
    }
  }, []);

  const createRecord = useCallback(async (recordData) => {
    setLoading(true);
    setError(null);
    try {
      const newRecord = await db
        .insert(Records)
        .values(recordData)
        .returning({ id: Records.id })
        .execute();
      setRecords((prevRecords) => [...prevRecords, newRecord[0]]);
      return { record: newRecord[0], error: null };
    } catch (err) {
      handleError(err, "Failed to create record");
      return { record: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const updateRecord = useCallback(async (recordData) => {
    setLoading(true);
    setError(null);
    try {
      const { documentID, ...dataToUpdate } = recordData;
      await db
        .update(Records)
        .set(dataToUpdate)
        .where(eq(Records.id, documentID))
        .returning();
      setRecords((prevRecords) =>
        prevRecords.map((record) =>
          record.id === documentID ? { ...record, ...dataToUpdate } : record,
        ),
      );
    } catch (err) {
      handleError(err, "Failed to update record");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteRecord = useCallback(async (recordID) => {
    setLoading(true);
    setError(null);
    try {
      await db.delete(Records).where(eq(Records.id, recordID));
      setRecords((prevRecords) =>
        prevRecords.filter((record) => record.id !== recordID),
      );
    } catch (err) {
      handleError(err, "Failed to delete record");
    } finally {
      setLoading(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      users,
      records,
      currentUser,
      loading,
      error,
      fetchUserByEmail,
      createUser,
      fetchUserRecords,
      createRecord,
      updateRecord,
      deleteRecord,
    }),
    [users, records, currentUser, loading, error],
  );

  return (
    <UserStateContext.Provider value={contextValue}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUserStateContext = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error(
      "useUserStateContext must be used within a UserStateContextProvider",
    );
  }
  return context;
};
