module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // This enables JSX transformation
      },
    ],
    "@emotion/babel-preset-css-prop", // Add Emotion preset here
  ],
};
