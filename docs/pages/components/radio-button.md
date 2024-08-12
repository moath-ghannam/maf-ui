---
meta:
  title: Radio Button
  description: Radios buttons allow the user to select a single option from a group using a button-like control.
layout: component
---

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html:preview
<mf-radio-group label="Select an option" name="a" value="1">
  <mf-radio-button value="1">Option 1</mf-radio-button>
  <mf-radio-button value="2">Option 2</mf-radio-button>
  <mf-radio-button value="3">Option 3</mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="1">
    <MfRadioButton value="1">Option 1</MfRadioButton>
    <MfRadioButton value="2">Option 2</MfRadioButton>
    <MfRadioButton value="3">Option 3</MfRadioButton>
  </MfRadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<mf-radio-group label="Select an option" name="a" value="1">
  <mf-radio-button value="1">Option 1</mf-radio-button>
  <mf-radio-button value="2">Option 2</mf-radio-button>
  <mf-radio-button value="3">Option 3</mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="1">
    <MfRadioButton value="1">Option 1</MfRadioButton>
    <MfRadioButton value="2">Option 2</MfRadioButton>
    <MfRadioButton value="3">Option 3</MfRadioButton>
  </MfRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html:preview
<mf-radio-group label="Select an option" name="a" value="1">
  <mf-radio-button value="1">Option 1</mf-radio-button>
  <mf-radio-button value="2" disabled>Option 2</mf-radio-button>
  <mf-radio-button value="3">Option 3</mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="1">
    <MfRadioButton value="1">Option 1</MfRadioButton>
    <MfRadioButton value="2" disabled>
      Option 2
    </MfRadioButton>
    <MfRadioButton value="3">Option 3</MfRadioButton>
  </MfRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html:preview
<mf-radio-group size="small" label="Select an option" name="a" value="1">
  <mf-radio-button value="1">Option 1</mf-radio-button>
  <mf-radio-button value="2">Option 2</mf-radio-button>
  <mf-radio-button value="3">Option 3</mf-radio-button>
</mf-radio-group>

<br />

<mf-radio-group size="medium" label="Select an option" name="a" value="1">
  <mf-radio-button value="1">Option 1</mf-radio-button>
  <mf-radio-button value="2">Option 2</mf-radio-button>
  <mf-radio-button value="3">Option 3</mf-radio-button>
</mf-radio-group>

<br />

<mf-radio-group size="large" label="Select an option" name="a" value="1">
  <mf-radio-button value="1">Option 1</mf-radio-button>
  <mf-radio-button value="2">Option 2</mf-radio-button>
  <mf-radio-button value="3">Option 3</mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup size="small" label="Select an option" name="a" value="1">
    <MfRadioButton value="1">Option 1</MfRadioButton>
    <MfRadioButton value="2">Option 2</MfRadioButton>
    <MfRadioButton value="3">Option 3</MfRadioButton>
  </MfRadioGroup>

  <br />

  <MfRadioGroup size="medium" label="Select an option" name="a" value="1">
    <MfRadioButton value="1">Option 1</MfRadioButton>
    <MfRadioButton value="2">Option 2</MfRadioButton>
    <MfRadioButton value="3">Option 3</MfRadioButton>
  </MfRadioGroup>

  <br />

  <MfRadioGroup size="large" label="Select an option" name="a" value="1">
    <MfRadioButton value="1">Option 1</MfRadioButton>
    <MfRadioButton value="2">Option 2</MfRadioButton>
    <MfRadioButton value="3">Option 3</MfRadioButton>
  </MfRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html:preview
<mf-radio-group size="small" label="Select an option" name="a" value="1">
  <mf-radio-button pill value="1">Option 1</mf-radio-button>
  <mf-radio-button pill value="2">Option 2</mf-radio-button>
  <mf-radio-button pill value="3">Option 3</mf-radio-button>
</mf-radio-group>

<br />

<mf-radio-group size="medium" label="Select an option" name="a" value="1">
  <mf-radio-button pill value="1">Option 1</mf-radio-button>
  <mf-radio-button pill value="2">Option 2</mf-radio-button>
  <mf-radio-button pill value="3">Option 3</mf-radio-button>
</mf-radio-group>

<br />

<mf-radio-group size="large" label="Select an option" name="a" value="1">
  <mf-radio-button pill value="1">Option 1</mf-radio-button>
  <mf-radio-button pill value="2">Option 2</mf-radio-button>
  <mf-radio-button pill value="3">Option 3</mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup size="small" label="Select an option" name="a" value="1">
    <MfRadioButton pill value="1">Option 1</MfRadioButton>
    <MfRadioButton pill value="2">Option 2</MfRadioButton>
    <MfRadioButton pill value="3">Option 3</MfRadioButton>
  </MfRadioGroup>

  <br />

  <MfRadioGroup size="medium" label="Select an option" name="a" value="1">
    <MfRadioButton pill value="1">Option 1</MfRadioButton>
    <MfRadioButton pill value="2">Option 2</MfRadioButton>
    <MfRadioButton pill value="3">Option 3</MfRadioButton>
  </MfRadioGroup>

  <br />

  <MfRadioGroup size="large" label="Select an option" name="a" value="1">
    <MfRadioButton pill value="1">Option 1</MfRadioButton>
    <MfRadioButton pill value="2">Option 2</MfRadioButton>
    <MfRadioButton pill value="3">Option 3</MfRadioButton>
  </MfRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<mf-radio-group label="Select an option" name="a" value="1">
  <mf-radio-button value="1">
    <mf-icon slot="prefix" name="archive"></mf-icon>
    Option 1
  </mf-radio-button>

  <mf-radio-button value="2">
    <mf-icon slot="suffix" name="bag"></mf-icon>
    Option 2
  </mf-radio-button>

  <mf-radio-button value="3">
    <mf-icon slot="prefix" name="gift"></mf-icon>
    <mf-icon slot="suffix" name="cart"></mf-icon>
    Option 3
  </mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="1">
    <MfRadioButton value="1">
      <MfIcon slot="prefix" name="archive" />
      Option 1
    </MfRadioButton>

    <MfRadioButton value="2">
      <MfIcon slot="suffix" name="bag" />
      Option 2
    </MfRadioButton>

    <MfRadioButton value="3">
      <MfIcon slot="prefix" name="gift" />
      <MfIcon slot="suffix" name="cart" />
      Option 3
    </MfRadioButton>
  </MfRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html:preview
<mf-radio-group label="Select an option" name="a" value="neutral">
  <mf-radio-button value="angry">
    <mf-icon name="emoji-angry" label="Angry"></mf-icon>
  </mf-radio-button>

  <mf-radio-button value="sad">
    <mf-icon name="emoji-frown" label="Sad"></mf-icon>
  </mf-radio-button>

  <mf-radio-button value="neutral">
    <mf-icon name="emoji-neutral" label="Neutral"></mf-icon>
  </mf-radio-button>

  <mf-radio-button value="happy">
    <mf-icon name="emoji-smile" label="Happy"></mf-icon>
  </mf-radio-button>

  <mf-radio-button value="laughing">
    <mf-icon name="emoji-laughing" label="Laughing"></mf-icon>
  </mf-radio-button>
</mf-radio-group>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfRadioButton from 'maf-ui-kit/dist/react/radio-button';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="neutral">
    <MfRadioButton value="angry">
      <MfIcon name="emoji-angry" label="Angry" />
    </MfRadioButton>

    <MfRadioButton value="sad">
      <MfIcon name="emoji-frown" label="Sad" />
    </MfRadioButton>

    <MfRadioButton value="neutral">
      <MfIcon name="emoji-neutral" label="Neutral" />
    </MfRadioButton>

    <MfRadioButton value="happy">
      <MfIcon name="emoji-smile" label="Happy" />
    </MfRadioButton>

    <MfRadioButton value="laughing">
      <MfIcon name="emoji-laughing" label="Laughing" />
    </MfRadioButton>
  </MfRadioGroup>
);
```
