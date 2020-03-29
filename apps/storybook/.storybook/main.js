module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/preset-typescript",
    "@storybook/addon-links",
    "storybook-addon-styled-component-theme/dist/register"
  ]
};
