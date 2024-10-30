module.exports = {
  presets: [
    "@babel/preset-env", // For modern JavaScript
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Enable the new JSX transform
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-runtime", // Helps avoid duplication in code
  ],
};
