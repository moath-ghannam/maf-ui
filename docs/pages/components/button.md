---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<mf-button>Button</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => <MfButton>Button</MfButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html:preview
<mf-button variant="default">Default</mf-button>
<mf-button variant="primary">Primary</mf-button>
<mf-button variant="success">Success</mf-button>
<mf-button variant="neutral">Neutral</mf-button>
<mf-button variant="warning">Warning</mf-button>
<mf-button variant="danger">Danger</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton variant="default">Default</MfButton>
    <MfButton variant="primary">Primary</MfButton>
    <MfButton variant="success">Success</MfButton>
    <MfButton variant="neutral">Neutral</MfButton>
    <MfButton variant="warning">Warning</MfButton>
    <MfButton variant="danger">Danger</MfButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html:preview
<mf-button size="small">Small</mf-button>
<mf-button size="medium">Medium</mf-button>
<mf-button size="large">Large</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton size="small">Small</MfButton>
    <MfButton size="medium">Medium</MfButton>
    <MfButton size="large">Large</MfButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html:preview
<mf-button variant="default" outline>Default</mf-button>
<mf-button variant="primary" outline>Primary</mf-button>
<mf-button variant="success" outline>Success</mf-button>
<mf-button variant="neutral" outline>Neutral</mf-button>
<mf-button variant="warning" outline>Warning</mf-button>
<mf-button variant="danger" outline>Danger</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton variant="default" outline>
      Default
    </MfButton>
    <MfButton variant="primary" outline>
      Primary
    </MfButton>
    <MfButton variant="success" outline>
      Success
    </MfButton>
    <MfButton variant="neutral" outline>
      Neutral
    </MfButton>
    <MfButton variant="warning" outline>
      Warning
    </MfButton>
    <MfButton variant="danger" outline>
      Danger
    </MfButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html:preview
<mf-button size="small" pill>Small</mf-button>
<mf-button size="medium" pill>Medium</mf-button>
<mf-button size="large" pill>Large</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton size="small" pill>
      Small
    </MfButton>
    <MfButton size="medium" pill>
      Medium
    </MfButton>
    <MfButton size="large" pill>
      Large
    </MfButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<mf-icon>` in the default slot.

```html:preview
<mf-button variant="default" size="small" circle>
  <mf-icon name="gear" label="Settings"></mf-icon>
</mf-button>

<mf-button variant="default" size="medium" circle>
  <mf-icon name="gear" label="Settings"></mf-icon>
</mf-button>

<mf-button variant="default" size="large" circle>
  <mf-icon name="gear" label="Settings"></mf-icon>
</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <>
    <MfButton variant="default" size="small" circle>
      <MfIcon name="gear" />
    </MfButton>
    <MfButton variant="default" size="medium" circle>
      <MfIcon name="gear" />
    </MfButton>
    <MfButton variant="default" size="large" circle>
      <MfIcon name="gear" />
    </MfButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html:preview
<mf-button variant="text" size="small">Text</mf-button>
<mf-button variant="text" size="medium">Text</mf-button>
<mf-button variant="text" size="large">Text</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton variant="text" size="small">
      Text
    </MfButton>
    <MfButton variant="text" size="medium">
      Text
    </MfButton>
    <MfButton variant="text" size="large">
      Text
    </MfButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

```html:preview
<mf-button href="https://example.com/">Link</mf-button>
<mf-button href="https://example.com/" target="_blank">New Window</mf-button>
<mf-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</mf-button>
<mf-button href="https://example.com/" disabled>Disabled</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton href="https://example.com/">Link</MfButton>
    <MfButton href="https://example.com/" target="_blank">
      New Window
    </MfButton>
    <MfButton href="/assets/images/wordmark.svg" download="shoelace.svg">
      Download
    </MfButton>
    <MfButton href="https://example.com/" disabled>
      Disabled
    </MfButton>
  </>
);
```

:::tip
When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).
:::

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html:preview
<mf-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</mf-button>
<mf-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</mf-button>
<mf-button variant="default" size="large" style="width: 100%;">Large</mf-button>
```

{% raw %}

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </MfButton>
    <MfButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </MfButton>
    <MfButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </MfButton>
  </>
);
```

{% endraw %}

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<mf-button variant="default" size="small">
  <mf-icon slot="prefix" name="gear"></mf-icon>
  Settings
</mf-button>

<mf-button variant="default" size="small">
  <mf-icon slot="suffix" name="arrow-counterclockwise"></mf-icon>
  Refresh
</mf-button>

<mf-button variant="default" size="small">
  <mf-icon slot="prefix" name="link-45deg"></mf-icon>
  <mf-icon slot="suffix" name="box-arrow-up-right"></mf-icon>
  Open
</mf-button>

<br /><br />

<mf-button variant="default">
  <mf-icon slot="prefix" name="gear"></mf-icon>
  Settings
</mf-button>

<mf-button variant="default">
  <mf-icon slot="suffix" name="arrow-counterclockwise"></mf-icon>
  Refresh
</mf-button>

<mf-button variant="default">
  <mf-icon slot="prefix" name="link-45deg"></mf-icon>
  <mf-icon slot="suffix" name="box-arrow-up-right"></mf-icon>
  Open
</mf-button>

<br /><br />

<mf-button variant="default" size="large">
  <mf-icon slot="prefix" name="gear"></mf-icon>
  Settings
</mf-button>

<mf-button variant="default" size="large">
  <mf-icon slot="suffix" name="arrow-counterclockwise"></mf-icon>
  Refresh
</mf-button>

<mf-button variant="default" size="large">
  <mf-icon slot="prefix" name="link-45deg"></mf-icon>
  <mf-icon slot="suffix" name="box-arrow-up-right"></mf-icon>
  Open
</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <>
    <MfButton variant="default" size="small">
      <MfIcon slot="prefix" name="gear"></MfIcon>
      Settings
    </MfButton>

    <MfButton variant="default" size="small">
      <MfIcon slot="suffix" name="arrow-counterclockwise"></MfIcon>
      Refresh
    </MfButton>

    <MfButton variant="default" size="small">
      <MfIcon slot="prefix" name="link-45deg"></MfIcon>
      <MfIcon slot="suffix" name="box-arrow-up-right"></MfIcon>
      Open
    </MfButton>

    <br />
    <br />

    <MfButton variant="default">
      <MfIcon slot="prefix" name="gear"></MfIcon>
      Settings
    </MfButton>

    <MfButton variant="default">
      <MfIcon slot="suffix" name="arrow-counterclockwise"></MfIcon>
      Refresh
    </MfButton>

    <MfButton variant="default">
      <MfIcon slot="prefix" name="link-45deg"></MfIcon>
      <MfIcon slot="suffix" name="box-arrow-up-right"></MfIcon>
      Open
    </MfButton>

    <br />
    <br />

    <MfButton variant="default" size="large">
      <MfIcon slot="prefix" name="gear"></MfIcon>
      Settings
    </MfButton>

    <MfButton variant="default" size="large">
      <MfIcon slot="suffix" name="arrow-counterclockwise"></MfIcon>
      Refresh
    </MfButton>

    <MfButton variant="default" size="large">
      <MfIcon slot="prefix" name="link-45deg"></MfIcon>
      <MfIcon slot="suffix" name="box-arrow-up-right"></MfIcon>
      Open
    </MfButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html:preview
<mf-button size="small" caret>Small</mf-button>
<mf-button size="medium" caret>Medium</mf-button>
<mf-button size="large" caret>Large</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton size="small" caret>
      Small
    </MfButton>
    <MfButton size="medium" caret>
      Medium
    </MfButton>
    <MfButton size="large" caret>
      Large
    </MfButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

```html:preview
<mf-button variant="default" loading>Default</mf-button>
<mf-button variant="primary" loading>Primary</mf-button>
<mf-button variant="success" loading>Success</mf-button>
<mf-button variant="neutral" loading>Neutral</mf-button>
<mf-button variant="warning" loading>Warning</mf-button>
<mf-button variant="danger" loading>Danger</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton variant="default" loading>
      Default
    </MfButton>
    <MfButton variant="primary" loading>
      Primary
    </MfButton>
    <MfButton variant="success" loading>
      Success
    </MfButton>
    <MfButton variant="neutral" loading>
      Neutral
    </MfButton>
    <MfButton variant="warning" loading>
      Warning
    </MfButton>
    <MfButton variant="danger" loading>
      Danger
    </MfButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button.

```html:preview
<mf-button variant="default" disabled>Default</mf-button>
<mf-button variant="primary" disabled>Primary</mf-button>
<mf-button variant="success" disabled>Success</mf-button>
<mf-button variant="neutral" disabled>Neutral</mf-button>
<mf-button variant="warning" disabled>Warning</mf-button>
<mf-button variant="danger" disabled>Danger</mf-button>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton variant="default" disabled>
      Default
    </MfButton>

    <MfButton variant="primary" disabled>
      Primary
    </MfButton>

    <MfButton variant="success" disabled>
      Success
    </MfButton>

    <MfButton variant="neutral" disabled>
      Neutral
    </MfButton>

    <MfButton variant="warning" disabled>
      Warning
    </MfButton>

    <MfButton variant="danger" disabled>
      Danger
    </MfButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `mf-button[variant="primary"]`).

```html:preview
<mf-button class="pink">Pink Button</mf-button>

<style>
  mf-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --mf-input-height-medium: 48px;
    --mf-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--mf-transition-medium) transform ease, var(--mf-transition-medium) border ease;
  }

  mf-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  mf-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  mf-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
