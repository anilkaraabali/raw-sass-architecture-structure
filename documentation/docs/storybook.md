---
id: storybook
title: Storybook
---

You need to install several packages for it to work properly.

## Requirements {#requirements}

- [Style loader](https://webpack.js.org/loaders/style-loader/)
- [CSS loader](https://webpack.js.org/loaders/css-loader/)
- [SASS loader](https://www.npmjs.com/package/sass-loader)
- [SASS resources loader](https://www.npmjs.com/package/sass-resources-loader)

```js title=".storybook/main.js"
module.exports = {
  // ...
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(scss)$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: require.resolve("sass-resources-loader"),
          options: {
            resources: `<path>/global.scss`,
          },
        },
      ],
      include: path.resolve(<path>),
    });

    return config;
  },
};
```
