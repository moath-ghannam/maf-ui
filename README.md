# maf-ui

A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛

---

## Shoemakers 🥾

Shoemakers, or "maf-ui developers," can use this documentation to learn how to build maf-ui from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use maf-ui!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of maf-ui.


### What are you using to build maf-ui?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).


```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/maf-ui
cd maf-ui
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `mf-tag-name` with the desired tag name.

```bash
npm run create mf-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.


