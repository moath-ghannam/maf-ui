---
meta:
  title: Vue (version 2)
  description: Tips for using maf-ui in your Vue 2 app.
---

# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use maf-ui in your Vue apps with ease.

:::tip
These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).
:::

## Installation

To add maf-ui to your Vue app, install the package from npm.

```bash
npm install maf-ui-kit
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import 'maf-ui-kit/%NPMDIR%/themes/light.css';
import { setBasePath } from 'maf-ui-kit/%NPMDIR%/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/maf-ui-kit@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/maf-ui-kit/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

You'll need to tell Vue to ignore maf-ui components. This is pretty easy because they all start with `mf-`.

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/mf-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can start using maf-ui components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<mf-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<mf-input v-model="name"></mf-input>
<!-- This works, but it's a bit longer -->
<mf-input :value="name" @input="name = $event.target.value"></mf-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-mf-model) adds a custom directive that will work just like `v-model` but for maf-ui components. To install it, use this command.

```bash
npm install @shoelace-style/vue-mf-model@1
```

Next, import the directive and enable it like this.

```js
import Vue from 'vue';
import maf-uiModelDirective from '@shoelace-style/vue-mf-model';
import App from './App.vue';

Vue.use(maf-uiModelDirective);
Vue.config.ignoredElements = [/mf-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can use the `v-mf-model` directive to keep your data in sync!

```html
<mf-input v-mf-model="name"></mf-input>
```

:::tip
Are you using maf-ui with Vue? [Help us improve this page!](https://github.com/maf-ui/blob/next/docs/frameworks/vue-2.md)
:::
