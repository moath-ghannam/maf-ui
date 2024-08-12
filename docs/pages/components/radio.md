---
meta:
  title: Radio
  description: Radios allow the user to select a single option from a group.
layout: component
---

Radios are designed to be used with [radio groups](/components/radio-group).

```html:preview
<mf-radio-group label="Select an option" name="a" value="1">
  <mf-radio value="1">Option 1</mf-radio>
  <mf-radio value="2">Option 2</mf-radio>
  <mf-radio value="3">Option 3</mf-radio>
</mf-radio-group>
```

```jsx:react
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="1">
    <MfRadio value="1">Option 1</MfRadio>
    <MfRadio value="2">Option 2</MfRadio>
    <MfRadio value="3">Option 3</MfRadio>
  </MfRadioGroup>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<mf-radio-group label="Select an option" name="a" value="3">
  <mf-radio value="1">Option 1</mf-radio>
  <mf-radio value="2">Option 2</mf-radio>
  <mf-radio value="3">Option 3</mf-radio>
</mf-radio-group>
```

```jsx:react
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="3">
    <MfRadio value="1">Option 1</MfRadio>
    <MfRadio value="2">Option 2</MfRadio>
    <MfRadio value="3">Option 3</MfRadio>
  </MfRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html:preview
<mf-radio-group label="Select an option" name="a" value="1">
  <mf-radio value="1">Option 1</mf-radio>
  <mf-radio value="2" disabled>Option 2</mf-radio>
  <mf-radio value="3">Option 3</mf-radio>
</mf-radio-group>
```

```jsx:react
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" name="a" value="1">
    <MfRadio value="1">Option 1</MfRadio>
    <MfRadio value="2" disabled>
      Option 2
    </MfRadio>
    <MfRadio value="3">Option 3</MfRadio>
  </MfRadioGroup>
);
```

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html preview
<mf-radio-group size="small" value="1">
  <mf-radio value="1">Small 1</mf-radio>
  <mf-radio value="2">Small 2</mf-radio>
  <mf-radio value="3">Small 3</mf-radio>
</mf-radio-group>

<br />

<mf-radio-group size="medium" value="1">
  <mf-radio value="1">Medium 1</mf-radio>
  <mf-radio value="2">Medium 2</mf-radio>
  <mf-radio value="3">Medium 3</mf-radio>
</mf-radio-group>

<br />

<mf-radio-group size="large" value="1">
  <mf-radio value="1">Large 1</mf-radio>
  <mf-radio value="2">Large 2</mf-radio>
  <mf-radio value="3">Large 3</mf-radio>
</mf-radio-group>
```

```jsx react
import MfRadio from 'maf-ui-kit/dist/react/radio';

const App = () => (
  <>
    <MfRadioGroup size="small" value="1">
      <MfRadio value="1">Small 1</MfRadio>
      <MfRadio value="2">Small 2</MfRadio>
      <MfRadio value="3">Small 3</MfRadio>
    </MfRadioGroup>

    <br />

    <MfRadioGroup size="medium" value="1">
      <MfRadio value="1">Medium 1</MfRadio>
      <MfRadio value="2">Medium 2</MfRadio>
      <MfRadio value="3">Medium 3</MfRadio>
    </MfRadioGroup>

    <br />

    <MfRadioGroup size="large" value="1">
      <MfRadio value="1">Large 1</MfRadio>
      <MfRadio value="2">Large 2</MfRadio>
      <MfRadio value="3">Large 3</MfRadio>
    </MfRadioGroup>
  </>
);
```
