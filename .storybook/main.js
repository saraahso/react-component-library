module.exports = {
  reactOptions: {
    fastRefresh: true,
  },
  "stories": [
    "../src/components/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ]
}