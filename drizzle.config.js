export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",

  dbCredentials: {
    url: import.meta.env.VITE_DATABASE_URL,
    connectionString: import.meta.env.VITE_DATABASE_URL,
  },
};
