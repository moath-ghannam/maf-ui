---
meta:
  title: Icon Button
  description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component
---

For a full list of icons that come bundled with maf-ui, refer to the [icon component](/components/icon).

```html:preview
<mf-icon-button name="gear" label="Settings"></mf-icon-button>
```

```jsx:react
import MfIconButton from 'maf-ui-kit/dist/react/icon-button';

const App = () => <MfIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html:preview
<mf-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></mf-icon-button>
<mf-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></mf-icon-button>
<mf-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></mf-icon-button>
```

{% raw %}

```jsx:react
import MfIconButton from 'maf-ui-kit/dist/react/icon-button';

const App = () => (
  <>
    <MfIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <MfIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <MfIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html:preview
<div class="icon-button-color">
  <mf-icon-button name="type-bold" label="Bold"></mf-icon-button>
  <mf-icon-button name="type-italic" label="Italic"></mf-icon-button>
  <mf-icon-button name="type-underline" label="Underline"></mf-icon-button>
</div>

<style>
  .icon-button-color mf-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color mf-icon-button::part(base):hover,
  .icon-button-color mf-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color mf-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx:react
import MfIconButton from 'maf-ui-kit/dist/react/icon-button';

const css = `
  .icon-button-color mf-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color mf-icon-button::part(base):hover,
  .icon-button-color mf-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color mf-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <MfIconButton name="type-bold" label="Bold" />
      <MfIconButton name="type-italic" label="Italic" />
      <MfIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html:preview
<mf-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></mf-icon-button>
```

```jsx:react
import MfIconButton from 'maf-ui-kit/dist/react/icon-button';

const App = () => <MfIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html:preview
<mf-tooltip content="Settings">
  <mf-icon-button name="gear" label="Settings"></mf-icon-button>
</mf-tooltip>
```

```jsx:react
import MfIconButton from 'maf-ui-kit/dist/react/icon-button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <MfTooltip content="Settings">
    <MfIconButton name="gear" label="Settings" />
  </MfTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html:preview
<mf-icon-button name="gear" label="Settings" disabled></mf-icon-button>
```

```jsx:react
import MfIconButton from 'maf-ui-kit/dist/react/icon-button';

const App = () => <MfIconButton name="gear" label="Settings" disabled />;
```
