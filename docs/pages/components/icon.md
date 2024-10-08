---
meta:
  title: Icon
  description: Icons are symbols that can be used to represent various options within an application.
layout: component
---

maf-ui comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

:::tip
Depending on how you're loading maf-ui, you may need to copy icon assets and/or [set the base path](/getting-started/installation/#setting-the-base-path) so maf-ui knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.
:::

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<mf-icon name="icon-name-here"></mf-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <mf-input placeholder="Search Icons" clearable>
      <mf-icon slot="prefix" name="search"></mf-icon>
    </mf-input>
    <mf-select value="outline">
      <mf-option value="outline">Outlined</mf-option>
      <mf-option value="fill">Filled</mf-option>
      <mf-option value="all">All icons</mf-option>
    </mf-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<mf-icon>` element or an ancestor to change the color.

```html:preview
<div style="color: #4a90e2;">
  <mf-icon name="exclamation-triangle"></mf-icon>
  <mf-icon name="archive"></mf-icon>
  <mf-icon name="battery-charging"></mf-icon>
  <mf-icon name="bell"></mf-icon>
</div>
<div style="color: #9013fe;">
  <mf-icon name="clock"></mf-icon>
  <mf-icon name="cloud"></mf-icon>
  <mf-icon name="download"></mf-icon>
  <mf-icon name="file-earmark"></mf-icon>
</div>
<div style="color: #417505;">
  <mf-icon name="flag"></mf-icon>
  <mf-icon name="heart"></mf-icon>
  <mf-icon name="image"></mf-icon>
  <mf-icon name="lightning"></mf-icon>
</div>
<div style="color: #f5a623;">
  <mf-icon name="mic"></mf-icon>
  <mf-icon name="search"></mf-icon>
  <mf-icon name="star"></mf-icon>
  <mf-icon name="trash"></mf-icon>
</div>
```

{% raw %}

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <MfIcon name="exclamation-triangle"></MfIcon>
      <MfIcon name="archive"></MfIcon>
      <MfIcon name="battery-charging"></MfIcon>
      <MfIcon name="bell"></MfIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <MfIcon name="clock"></MfIcon>
      <MfIcon name="cloud"></MfIcon>
      <MfIcon name="download"></MfIcon>
      <MfIcon name="file-earmark"></MfIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <MfIcon name="flag"></MfIcon>
      <MfIcon name="heart"></MfIcon>
      <MfIcon name="image"></MfIcon>
      <MfIcon name="lightning"></MfIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <MfIcon name="mic"></MfIcon>
      <MfIcon name="search"></MfIcon>
      <MfIcon name="star"></MfIcon>
      <MfIcon name="trash"></MfIcon>
    </div>
  </>
);
```

{% endraw %}

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html:preview
<div style="font-size: 32px;">
  <mf-icon name="exclamation-triangle"></mf-icon>
  <mf-icon name="archive"></mf-icon>
  <mf-icon name="battery-charging"></mf-icon>
  <mf-icon name="bell"></mf-icon>
  <mf-icon name="clock"></mf-icon>
  <mf-icon name="cloud"></mf-icon>
  <mf-icon name="download"></mf-icon>
  <mf-icon name="file-earmark"></mf-icon>
  <mf-icon name="flag"></mf-icon>
  <mf-icon name="heart"></mf-icon>
  <mf-icon name="image"></mf-icon>
  <mf-icon name="lightning"></mf-icon>
  <mf-icon name="mic"></mf-icon>
  <mf-icon name="search"></mf-icon>
  <mf-icon name="star"></mf-icon>
  <mf-icon name="trash"></mf-icon>
</div>
```

{% raw %}

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <MfIcon name="exclamation-triangle" />
    <MfIcon name="archive" />
    <MfIcon name="battery-charging" />
    <MfIcon name="bell" />
    <MfIcon name="clock" />
    <MfIcon name="cloud" />
    <MfIcon name="download" />
    <MfIcon name="file-earmark" />
    <MfIcon name="flag" />
    <MfIcon name="heart" />
    <MfIcon name="image" />
    <MfIcon name="lightning" />
    <MfIcon name="mic" />
    <MfIcon name="search" />
    <MfIcon name="star" />
    <MfIcon name="trash" />
  </div>
);
```

{% endraw %}

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html:preview
<mf-icon name="star-fill" label="Add to favorites"></mf-icon>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => <MfIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html:preview
<mf-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></mf-icon>
```

{% raw %}

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => <MfIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></MfIcon>;
```

{% endraw %}

## Icon Libraries

You can register additional icons to use with the `<mf-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

maf-ui ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by maf-ui components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<mf-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<mf-icon library="my-icons" name="smile"></mf-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="boxicons" name="bx-bot"></mf-icon>
  <mf-icon library="boxicons" name="bx-cookie"></mf-icon>
  <mf-icon library="boxicons" name="bx-joystick"></mf-icon>
  <mf-icon library="boxicons" name="bx-save"></mf-icon>
  <mf-icon library="boxicons" name="bx-server"></mf-icon>
  <mf-icon library="boxicons" name="bx-wine"></mf-icon>
  <br />
  <mf-icon library="boxicons" name="bxs-bot"></mf-icon>
  <mf-icon library="boxicons" name="bxs-cookie"></mf-icon>
  <mf-icon library="boxicons" name="bxs-joystick"></mf-icon>
  <mf-icon library="boxicons" name="bxs-save"></mf-icon>
  <mf-icon library="boxicons" name="bxs-server"></mf-icon>
  <mf-icon library="boxicons" name="bxs-wine"></mf-icon>
  <br />
  <mf-icon library="boxicons" name="bxl-apple"></mf-icon>
  <mf-icon library="boxicons" name="bxl-chrome"></mf-icon>
  <mf-icon library="boxicons" name="bxl-edge"></mf-icon>
  <mf-icon library="boxicons" name="bxl-firefox"></mf-icon>
  <mf-icon library="boxicons" name="bxl-opera"></mf-icon>
  <mf-icon library="boxicons" name="bxl-microsoft"></mf-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html:preview
<div style="font-size: 24px;">
  <mf-icon library="lucide" name="feather"></mf-icon>
  <mf-icon library="lucide" name="pie-chart"></mf-icon>
  <mf-icon library="lucide" name="settings"></mf-icon>
  <mf-icon library="lucide" name="map-pin"></mf-icon>
  <mf-icon library="lucide" name="printer"></mf-icon>
  <mf-icon library="lucide" name="shopping-cart"></mf-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="fa" name="far-bell"></mf-icon>
  <mf-icon library="fa" name="far-comment"></mf-icon>
  <mf-icon library="fa" name="far-hand-point-right"></mf-icon>
  <mf-icon library="fa" name="far-hdd"></mf-icon>
  <mf-icon library="fa" name="far-heart"></mf-icon>
  <mf-icon library="fa" name="far-star"></mf-icon>
  <br />
  <mf-icon library="fa" name="fas-archive"></mf-icon>
  <mf-icon library="fa" name="fas-book"></mf-icon>
  <mf-icon library="fa" name="fas-chess-knight"></mf-icon>
  <mf-icon library="fa" name="fas-dice"></mf-icon>
  <mf-icon library="fa" name="fas-pizza-slice"></mf-icon>
  <mf-icon library="fa" name="fas-scroll"></mf-icon>
  <br />
  <mf-icon library="fa" name="fab-apple"></mf-icon>
  <mf-icon library="fa" name="fab-chrome"></mf-icon>
  <mf-icon library="fa" name="fab-edge"></mf-icon>
  <mf-icon library="fa" name="fab-firefox"></mf-icon>
  <mf-icon library="fa" name="fab-opera"></mf-icon>
  <mf-icon library="fa" name="fab-microsoft"></mf-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="heroicons" name="chat-bubble-left"></mf-icon>
  <mf-icon library="heroicons" name="cloud"></mf-icon>
  <mf-icon library="heroicons" name="cog"></mf-icon>
  <mf-icon library="heroicons" name="document-text"></mf-icon>
  <mf-icon library="heroicons" name="gift"></mf-icon>
  <mf-icon library="heroicons" name="speaker-wave"></mf-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="iconoir" name="check-circled-outline"></mf-icon>
  <mf-icon library="iconoir" name="drawer"></mf-icon>
  <mf-icon library="iconoir" name="keyframes"></mf-icon>
  <mf-icon library="iconoir" name="headset-help"></mf-icon>
  <mf-icon library="iconoir" name="color-picker"></mf-icon>
  <mf-icon library="iconoir" name="wifi"></mf-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="ionicons" name="alarm"></mf-icon>
  <mf-icon library="ionicons" name="american-football"></mf-icon>
  <mf-icon library="ionicons" name="bug"></mf-icon>
  <mf-icon library="ionicons" name="chatbubble"></mf-icon>
  <mf-icon library="ionicons" name="settings"></mf-icon>
  <mf-icon library="ionicons" name="warning"></mf-icon>
  <br />
  <mf-icon library="ionicons" name="alarm-outline"></mf-icon>
  <mf-icon library="ionicons" name="american-football-outline"></mf-icon>
  <mf-icon library="ionicons" name="bug-outline"></mf-icon>
  <mf-icon library="ionicons" name="chatbubble-outline"></mf-icon>
  <mf-icon library="ionicons" name="settings-outline"></mf-icon>
  <mf-icon library="ionicons" name="warning-outline"></mf-icon>
  <br />
  <mf-icon library="ionicons" name="alarm-sharp"></mf-icon>
  <mf-icon library="ionicons" name="american-football-sharp"></mf-icon>
  <mf-icon library="ionicons" name="bug-sharp"></mf-icon>
  <mf-icon library="ionicons" name="chatbubble-sharp"></mf-icon>
  <mf-icon library="ionicons" name="settings-sharp"></mf-icon>
  <mf-icon library="ionicons" name="warning-sharp"></mf-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="jam" name="calendar"></mf-icon>
  <mf-icon library="jam" name="camera"></mf-icon>
  <mf-icon library="jam" name="filter"></mf-icon>
  <mf-icon library="jam" name="leaf"></mf-icon>
  <mf-icon library="jam" name="picture"></mf-icon>
  <mf-icon library="jam" name="set-square"></mf-icon>
  <br />
  <mf-icon library="jam" name="calendar-f"></mf-icon>
  <mf-icon library="jam" name="camera-f"></mf-icon>
  <mf-icon library="jam" name="filter-f"></mf-icon>
  <mf-icon library="jam" name="leaf-f"></mf-icon>
  <mf-icon library="jam" name="picture-f"></mf-icon>
  <mf-icon library="jam" name="set-square-f"></mf-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="material" name="notifications"></mf-icon>
  <mf-icon library="material" name="email"></mf-icon>
  <mf-icon library="material" name="delete"></mf-icon>
  <mf-icon library="material" name="volume_up"></mf-icon>
  <mf-icon library="material" name="settings"></mf-icon>
  <mf-icon library="material" name="shopping_basket"></mf-icon>
  <br />
  <mf-icon library="material" name="notifications_round"></mf-icon>
  <mf-icon library="material" name="email_round"></mf-icon>
  <mf-icon library="material" name="delete_round"></mf-icon>
  <mf-icon library="material" name="volume_up_round"></mf-icon>
  <mf-icon library="material" name="settings_round"></mf-icon>
  <mf-icon library="material" name="shopping_basket_round"></mf-icon>
  <br />
  <mf-icon library="material" name="notifications_sharp"></mf-icon>
  <mf-icon library="material" name="email_sharp"></mf-icon>
  <mf-icon library="material" name="delete_sharp"></mf-icon>
  <mf-icon library="material" name="volume_up_sharp"></mf-icon>
  <mf-icon library="material" name="settings_sharp"></mf-icon>
  <mf-icon library="material" name="shopping_basket_sharp"></mf-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="remixicon" name="business/cloud-line"></mf-icon>
  <mf-icon library="remixicon" name="design/brush-line"></mf-icon>
  <mf-icon library="remixicon" name="business/pie-chart-line"></mf-icon>
  <mf-icon library="remixicon" name="development/bug-line"></mf-icon>
  <mf-icon library="remixicon" name="media/image-line"></mf-icon>
  <mf-icon library="remixicon" name="system/alert-line"></mf-icon>
  <br />
  <mf-icon library="remixicon" name="business/cloud-fill"></mf-icon>
  <mf-icon library="remixicon" name="design/brush-fill"></mf-icon>
  <mf-icon library="remixicon" name="business/pie-chart-fill"></mf-icon>
  <mf-icon library="remixicon" name="development/bug-fill"></mf-icon>
  <mf-icon library="remixicon" name="media/image-fill"></mf-icon>
  <mf-icon library="remixicon" name="system/alert-fill"></mf-icon>
</div>
```

### Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="tabler" name="alert-triangle"></mf-icon>
  <mf-icon library="tabler" name="arrow-back"></mf-icon>
  <mf-icon library="tabler" name="at"></mf-icon>
  <mf-icon library="tabler" name="ball-baseball"></mf-icon>
  <mf-icon library="tabler" name="cake"></mf-icon>
  <mf-icon library="tabler" name="files"></mf-icon>
  <br />
  <mf-icon library="tabler" name="keyboard"></mf-icon>
  <mf-icon library="tabler" name="moon"></mf-icon>
  <mf-icon library="tabler" name="pig"></mf-icon>
  <mf-icon library="tabler" name="printer"></mf-icon>
  <mf-icon library="tabler" name="ship"></mf-icon>
  <mf-icon library="tabler" name="toilet-paper"></mf-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="unicons" name="clock"></mf-icon>
  <mf-icon library="unicons" name="graph-bar"></mf-icon>
  <mf-icon library="unicons" name="padlock"></mf-icon>
  <mf-icon library="unicons" name="polygon"></mf-icon>
  <mf-icon library="unicons" name="rocket"></mf-icon>
  <mf-icon library="unicons" name="star"></mf-icon>
  <br />
  <mf-icon library="unicons" name="clock-s"></mf-icon>
  <mf-icon library="unicons" name="graph-bar-s"></mf-icon>
  <mf-icon library="unicons" name="padlock-s"></mf-icon>
  <mf-icon library="unicons" name="polygon-s"></mf-icon>
  <mf-icon library="unicons" name="rocket-s"></mf-icon>
  <mf-icon library="unicons" name="star-s"></mf-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<mf-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

#### Customize the default library to use SVG sprites

To improve performance you can use a SVG sprites to avoid multiple trips for each SVG. The browser will load the sprite sheet once and then you reference the particular SVG within the sprite sheet using hash selector.

As always, make sure to benchmark these changes. When using HTTP/2, it may in fact be more bandwidth-friendly to use multiple small requests instead of 1 large sprite sheet.

:::danger
When using sprite sheets, the `mf-load` and `mf-error` events will not fire.
:::

:::danger
For security reasons, browsers may apply the same-origin policy on `<use>` elements located in the `<mf-icon>` shadow DOM and may refuse to load a cross-origin URL. There is currently no defined way to set a cross-origin policy for `<use>` elements. For this reason, sprite sheets should only be used if you're self-hosting them.
:::

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('sprite', {
    resolver: name => `/assets/images/sprite.svg#${name}`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
    spriteSheet: true
  });
</script>

<div style="font-size: 24px;">
  <mf-icon library="sprite" name="clock"></mf-icon>
  <mf-icon library="sprite" name="speedometer"></mf-icon>
</div>
```

### Customizing the System Library

The system library contains only the icons used internally by maf-ui components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons maf-ui uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by maf-ui.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  function wrapWithTooltip(item) {
    const tooltip = document.createElement('mf-tooltip');
    tooltip.content = item.getAttribute('data-name');

    // Close open tooltips
    document.querySelectorAll('.icon-list mf-tooltip[open]').forEach(tooltip => tooltip.hide());

    // Wrap it with a tooltip and trick it into showing up
    item.parentNode.insertBefore(tooltip, item);
    tooltip.appendChild(item);
    requestAnimationFrame(() => tooltip.dispatchEvent(new MouseEvent('mouseover')));
  }

  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('mf-input');
      const select = container.querySelector('mf-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use href="/assets/images/sprite.svg#${i.name}"></use>
          </svg>
        `;
        list.appendChild(item);

        // Wrap it with a tooltip the first time the mouse lands on it. We do this instead of baking them into the DOM
        // to improve this page's performance. See: https://github.com/maf-ui/issues/1122
        item.addEventListener('mouseover', () => wrapWithTooltip(item), { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('mf-tooltip');
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            tooltip.content = 'Copied!';
            setTimeout(() => tooltip.content = i.name, 1000);
          }
        });
      });

      // Filter as the user types
      input.addEventListener('mf-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = sessionStorage.getItem('mf-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('mf-change', () => {
        list.setAttribute('data-type', select.value);
        sessionStorage.setItem('mf-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--mf-panel-border-color);
    border-radius: var(--mf-border-radius-medium);
    padding: var(--mf-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls mf-input {
    flex: 1 1 auto;
  }

  .icon-search-controls mf-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mf-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--mf-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--mf-color-primary-50);
    color: var(--mf-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls mf-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
