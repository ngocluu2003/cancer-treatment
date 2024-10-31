module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Use the new JSX runtime, required for `_jsx` and `_jsxs` transforms
      },
    ],
  ],
  plugins: ["@emotion/babel-plugin"], // Ensure the plugin is correctly named
};
