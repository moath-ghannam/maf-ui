---
meta:
  title: Installation
  description: Choose the installation method that works best for you.
---

# Installation

You can load maf-ui via CDN or by installing it locally. If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular) for additional information.

## CDN Installation (Easiest)

<mf-tab-group>
<mf-tab slot="nav" panel="autoloader" active>Autoloader</mf-tab>
<mf-tab slot="nav" panel="traditional">Traditional Loader</mf-tab>

<mf-tab-panel name="autoloader">

The experimental autoloader is the easiest and most efficient way to use maf-ui. A lightweight script watches the DOM for unregistered maf-ui elements and lazy loads them for you — even if they're added dynamically.

While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/shoelace-autoloader.js"></script>
```

</mf-tab-panel>

<mf-tab-panel name="traditional">

The traditional CDN loader registers all maf-ui elements up front. Note that, if you're only using a handful of components, it will be much more efficient to stick with the autoloader. However, you can also [cherry pick](#cherry-picking) components if you want to load specific ones up front.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/shoelace.js" ></script>
```

</mf-tab-panel>
</mf-tab-group>

### Dark Theme

The code above will load the light theme. If you want to use the [dark theme](/getting-started/themes#dark-theme) instead, update the stylesheet as shown below and add `<html class="mf-theme-dark">` to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/themes/dark.css" />
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use the stylesheets below. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/themes/light.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/@maf-ui@%VERSION%/%CDNDIR%/themes/dark.css"
  onload="document.documentElement.classList.add('mf-theme-dark');"
/>
```

Now you can [start using maf-ui!](/getting-started/usage)

## npm installation

If you don't want to use the CDN, you can install maf-ui from npm with the following command.

```bash
npm install @maf-ui
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/shoelace` that serves static files from `node_modules/@maf-ui`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/shoelace/%NPMDIR%/themes/light.css" />
<script type="module" src="/shoelace/%NPMDIR%/shoelace.js"></script>
```

Alternatively, [you can use a bundler](#bundling).

:::tip
For clarity, the docs will usually show imports from `@maf-ui`. If you're not using a module resolver or bundler, you'll need to adjust these paths to point to the folder maf-ui is in.
:::

## Setting the Base Path

Some components rely on assets (icons, images, etc.) and maf-ui needs to know where they're located. For convenience, maf-ui will try to auto-detect the correct location based on the script you've loaded it from. This assumes assets are colocated with `shoelace.js` or `shoelace-autoloader.js` and will "just work" for most users.

However, if you're [cherry picking](#cherry-picking) or [bundling](#bundling) maf-ui, you'll need to set the base path. You can do this one of two ways.

```html
<!-- Option 1: the data-shoelace attribute -->
<script src="bundle.js" data-shoelace="/path/to/shoelace/%NPMDIR%"></script>

<!-- Option 2: the setBasePath() method -->
<script src="bundle.js"></script>
<script type="module">
  import { setBasePath } from '@maf-ui/%NPMDIR%/utilities/base-path.js';
  setBasePath('/path/to/shoelace/%NPMDIR%');
</script>
```

:::tip
An easy way to make sure the base path is configured properly is to check if [icons](/components/icon) are loading.
:::

### Referencing Assets

Most of the magic behind assets is handled internally by maf-ui, but if you need to reference the base path for any reason, the same module exports a function called `getBasePath()`. An optional string argument can be passed, allowing you to get the full path to any asset.

```html
<script type="module">
  import { getBasePath, setBasePath } from '@maf-ui/%NPMDIR%/utilities/base-path.js';

  setBasePath('/path/to/assets');

  // ...

  // Get the base path, e.g. /path/to/assets
  const basePath = getBasePath();

  // Get the path to an asset, e.g. /path/to/assets/file.ext
  const assetPath = getBasePath('file.ext');
</script>
```

## Cherry Picking

Cherry picking can be done from [the CDN](#cdn-installation-easiest) or from [npm](#npm-installation). This approach will load only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder maf-ui is in.

```html
<link rel="stylesheet" href="/path/to/shoelace/%NPMDIR%/themes/light.css" />

<script type="module" data-shoelace="/path/to/shoelace/%NPMDIR%">
  import '@maf-ui/%NPMDIR%/components/button/button.js';

  // <mf-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

:::warning
Never cherry pick components or utilities from `shoelace.js` as this will cause the browser to load the entire library. Instead, cherry pick from specific modules as shown above.
:::

:::warning
You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.
:::

## Bundling

maf-ui is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use maf-ui with a bundler, first install maf-ui along with your bundler of choice.

```bash
npm install @maf-ui
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

- [Example webpack config](https://github.com/shoelace-style/webpack-example/blob/master/webpack.config.js)
- [Example Rollup config](https://github.com/shoelace-style/rollup-example/blob/master/rollup.config.js)

Once your bundler is configured, you'll be able to import maf-ui components and utilities.

```js
import '@maf-ui/%NPMDIR%/themes/light.css';
import '@maf-ui/%NPMDIR%/components/button/button.js';
import '@maf-ui/%NPMDIR%/components/icon/icon.js';
import '@maf-ui/%NPMDIR%/components/input/input.js';
import '@maf-ui/%NPMDIR%/components/rating/rating.js';
import { setBasePath } from '@maf-ui/%NPMDIR%/utilities/base-path.js';

// Set the base path to the folder you copied maf-ui's assets to
setBasePath('/path/to/shoelace/%NPMDIR%');

// <mf-button>, <mf-icon>, <mf-input>, and <mf-rating> are ready to use!
```

:::warning
Component modules include side effects for registration purposes. Because of this, importing directly from `@maf-ui` may result in a larger bundle size than necessary. For optimal tree shaking, always cherry pick, i.e. import components and utilities from their respective files, as shown above.
:::

### Avoiding auto-registering imports

By default, imports to components will auto-register themselves. This may not be ideal in all cases. To import just the component's class without auto-registering it's tag we can do the following:

```diff
- import MfButton from '@maf-ui/%NPMDIR%/components/button/button.js';
+ import MfButton from '@maf-ui/%NPMDIR%/components/button/button.component.js';
```

Notice how the import ends with `.component.js`. This is the current convention to convey the import does not register itself.

:::danger
While you can override the class or re-register the shoelace class under a different tag name, if you do so, many components won’t work as expected.
:::

## The difference between CDN and npm

You'll notice that the CDN links all start with `/%CDNDIR%/<path>` and npm imports use `/%NPMDIR%/<path>`. The `/%CDNDIR%` files are bundled separately from the `/%NPMDIR%` files. The `/%CDNDIR%` files come pre-bundled, which means all dependencies are inlined so you do not need to worry about loading additional libraries. The `/%NPMDIR%` files **DO NOT** come pre-bundled, allowing your bundler of choice to more efficiently deduplicate dependencies, resulting in smaller bundles and optimal code sharing.

TL;DR:

- `@maf-ui/%CDNDIR%` is for CDN users
- `@maf-ui/%NPMDIR%` is for npm users

This change was introduced in `v2.5.0` to address issues around installations from npm loading multiple versions of libraries (such as the Lit) that maf-ui uses internally.
