import React, { createContext, useCallback, useContext, useState } from "react";
import { db } from "../utils/dbConfig";

import { Users, Records } from "../utils/schema";
import { eq } from "drizzle-orm";

const StateContext = createContext();

export const StateContextProvide = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      const results = await db.select().from(Users).execute();
      setUsers(results);
    } catch (error) {}
  });
};
