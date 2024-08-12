---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
---

```html:preview
<mf-switch>Switch</mf-switch>
```

```jsx:react
import MfSwitch from 'maf-ui-kit/dist/react/switch';

const App = () => <MfSwitch>Switch</MfSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<mf-switch checked>Checked</mf-switch>
```

```jsx:react
import MfSwitch from 'maf-ui-kit/dist/react/switch';

const App = () => <MfSwitch checked>Checked</MfSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<mf-switch disabled>Disabled</mf-switch>
```

```jsx:react
import MfSwitch from 'maf-ui-kit/dist/react/switch';

const App = () => <MfSwitch disabled>Disabled</MfSwitch>;
```

### Sizes

Use the `size` attribute to change a switch's size.

```html:preview
<mf-switch size="small">Small</mf-switch>
<br />
<mf-switch size="medium">Medium</mf-switch>
<br />
<mf-switch size="large">Large</mf-switch>
```

```jsx:react
import MfSwitch from 'maf-ui-kit/dist/react/switch';

const App = () => (
  <>
    <MfSwitch size="small">Small</MfSwitch>
    <br />
    <MfSwitch size="medium">Medium</MfSwitch>
    <br />
    <MfSwitch size="large">Large</MfSwitch>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-switch help-text="What should the user know about the switch?">Label</mf-switch>
```

```jsx:react
import MfSwitch from 'maf-ui-kit/dist/react/checkbox';

const App = () => <MfSwitch help-text="What should the user know about the switch?">Label</MfSwitch>;
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html:preview
<mf-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</mf-switch>
```

{% raw %}

```jsx:react
import MfSwitch from 'maf-ui-kit/dist/react/switch';

const App = () => (
  <MfSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
