---
id: nextjs
title: Next.js
---

If you want to configure the Sass compiler you can do so by using `sassOptions` in `next.config.js`.

```js title="next.config.js"
const path = require("path");

module.exports = {
  // ...
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/global.scss")],
  },
};
```

Then you can simply start to use global variables inside the components without importing

## Example {#example}

```scss title="example.module.scss"
.example {
  color: color(gray-50);
  margin: spacing(2);
  height: pxToRem(56);
  @include trim();

  // color: #f9fafb;
  // margin: 8px;
  // height: 3.5rem;

  @include respond-above(md) {
    height: pxToRem(96);

    // height: 6rem;
  }
}
```
