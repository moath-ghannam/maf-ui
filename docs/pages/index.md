---
meta:
  title: 'maf-ui: A forward-thinking library of web components.'
  description: Hand-crafted custom elements for any occasion.
toc: false
---

<div class="splash">
<div class="splash-start">
<img class="splash-logo" src="/assets/images/logo.avif" alt="maf-ui">

# <mf-visually-hidden>maf-ui:</mf-visually-hidden> A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes a dark theme 🌛
- Built with accessibility in mind ♿️
- First-class [React support](/frameworks/react) ⚛️
- Built-in localization 💬

## Quick Start

Add the following code to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/shoelace-autoloader.js"></script>
```

Now you have access to all of maf-ui's components! Try adding a button:

```html:preview:expanded:no-codepen
<mf-button>Click me</mf-button>
```

:::tip
This will activate maf-ui's experimental autoloader, which registers components on the fly as you use them. To learn more about it, or for other ways to install maf-ui, refer to the [installation instructions](getting-started/installation).
:::

## New to Web Components?

**TL;DR** – we finally have a way to create [our own HTML elements](https://html.spec.whatwg.org/multipage/custom-elements.html) and use them in any framework we want!

Thanks to the popularity of frameworks such as Angular, Vue, and React, component-driven development has become a part of our every day lives. Components help us encapsulate styles and behaviors into reusable building blocks. They make a lot of sense in terms of design, development, and testing.

Unfortunately, _framework-specific_ components fail us in a number of ways:

- You can only use them in the framework they're designed for 🔒
- Their lifespan is limited to that of the framework's ⏳
- New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems. They're [supported by all modern browsers](https://caniuse.com/#feat=custom-elementsv1), they're framework-agnostic, and they're [part of the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

This is the technology that maf-ui is built on.

## What Problem Does This Solve?

maf-ui provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology. Why spend hundreds of hours (or more) building a design system from scratch? Why make a component library that only works with one framework?

With maf-ui, you can:

- Start building things faster (no need to roll your own buttons)
- Build multiple apps with different frameworks that all share the same UI components
- Fully customize components to match your existing designs
- Incrementally adopt components as needed (no need to ditch your framework)
- Upgrade or switch frameworks without rebuilding foundational components

If your organization is looking to build a design system, [maf-ui will save you thousands of dollars](https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871). All the foundational components you need are right here, ready to be customized for your brand. And since it's built on web standards, browsers will continue to support it for many years to come.

Whether you use maf-ui as a starting point for your organization's design system or for a fun personal project, there's no limit to what you can do with it.

## Browser Support

maf-ui is tested in the latest two versions of the following browsers.

<img src="/assets/images/chrome.png" alt="Chrome" width="64" height="64">
<img src="/assets/images/edge.png" alt="Edge" width="64" height="64">
<img src="/assets/images/firefox.png" alt="Firefox" width="64" height="64">
<img src="/assets/images/opera.png" alt="Opera" width="64" height="64">
<img src="/assets/images/safari.png" alt="Safari" width="64" height="64">

Critical bug fixes in earlier versions will be addressed based on their severity and impact.

If you need to support IE11 or pre-Chromium Edge, this library isn't for you. Although web components can (to some degree) be polyfilled for legacy browsers, supporting them is outside the scope of this project. If you're using maf-ui in such a browser, you're gonna have a bad time. ⛷
