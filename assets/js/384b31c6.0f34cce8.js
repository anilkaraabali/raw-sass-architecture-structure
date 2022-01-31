"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[399],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"nextjs",title:"Next.js"},c=void 0,u={unversionedId:"nextjs",id:"nextjs",title:"Next.js",description:"If you want to configure the Sass compiler you can do so by using sassOptions in next.config.js.",source:"@site/docs/nextjs.md",sourceDirName:".",slug:"/nextjs",permalink:"/raw-sass-architecture-structure/docs/nextjs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs.md",tags:[],version:"current",lastUpdatedBy:"Anil Karaabali",lastUpdatedAt:1643662977,formattedLastUpdatedAt:"2/1/2022",frontMatter:{id:"nextjs",title:"Next.js"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/raw-sass-architecture-structure/docs/intro"},next:{title:"Storybook",permalink:"/raw-sass-architecture-structure/docs/storybook"}},l=[{value:"Example",id:"example",children:[],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to configure the Sass compiler you can do so by using ",(0,a.kt)("inlineCode",{parentName:"p"},"sassOptions")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="next.config.js"',title:'"next.config.js"'},'const path = require("path");\n\nmodule.exports = {\n  // ...\n  sassOptions: {\n    includePaths: [path.join(__dirname, "styles/global.scss")],\n  },\n};\n')),(0,a.kt)("p",null,"Then you can simply start to use global variables inside the components without importing"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="example.module.scss"',title:'"example.module.scss"'},".example {\n  color: color(gray-50);\n  margin: spacing(2);\n  height: pxToRem(56);\n  @include trim();\n\n  // color: #f9fafb;\n  // margin: 8px;\n  // height: 3.5rem;\n\n  @include respond-above(md) {\n    height: pxToRem(96);\n\n    // height: 6rem;\n  }\n}\n")))}m.isMDXComponent=!0}}]);