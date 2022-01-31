"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7392:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={id:"storybook",title:"Storybook"},c=void 0,i={unversionedId:"storybook",id:"storybook",title:"Storybook",description:"You need to install several packages for it to work properly.",source:"@site/docs/storybook.md",sourceDirName:".",slug:"/storybook",permalink:"/raw-sass-architecture-structure/docs/storybook",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/storybook.md",tags:[],version:"current",lastUpdatedBy:"Anil Karaabali",lastUpdatedAt:1643662977,formattedLastUpdatedAt:"2/1/2022",frontMatter:{id:"storybook",title:"Storybook"},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/raw-sass-architecture-structure/docs/nextjs"}},u=[{value:"Requirements",id:"requirements",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You need to install several packages for it to work properly."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/loaders/style-loader/"},"Style loader")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/loaders/css-loader/"},"CSS loader")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/sass-loader"},"SASS loader")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/sass-resources-loader"},"SASS resources loader"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".storybook/main.js"',title:'".storybook/main.js"'},'module.exports = {\n  // ...\n  webpackFinal: (config) => {\n    config.module.rules.push({\n      test: /\\.(scss)$/,\n      use: [\n        "style-loader",\n        "css-loader",\n        "sass-loader",\n        {\n          loader: require.resolve("sass-resources-loader"),\n          options: {\n            resources: `<path>/global.scss`,\n          },\n        },\n      ],\n      include: path.resolve(<path>),\n    });\n\n    return config;\n  },\n};\n')))}d.isMDXComponent=!0}}]);