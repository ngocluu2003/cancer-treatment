module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Enable automatic JSX transformation
        importSource: "@emotion/react", // Use Emotion’s JSX import source
      },
    ],
    "@emotion/babel-preset-css-prop", // Support Emotion’s css prop
  ],
  plugins: ["@emotion"],
};
