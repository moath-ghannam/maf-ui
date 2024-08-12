---
meta:
  title: Radio Group
  description: Radio groups are used to group multiple radios or radio buttons so they function as a single form control.
layout: component
---

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

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <mf-radio value="1">Option 1</mf-radio>
  <mf-radio value="2">Option 2</mf-radio>
  <mf-radio value="3">Option 3</mf-radio>
</mf-radio-group>
```

```jsx:react
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => (
  <MfRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <MfRadio value="1">Option 1</MfRadio>
    <MfRadio value="2">Option 2</MfRadio>
    <MfRadio value="3">Option 3</MfRadio>
  </MfRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html:preview
<mf-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
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

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

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

### Sizing Options

The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's `size` attribute.

```html preview
<mf-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
  <mf-radio value="small">Small</mf-radio>
  <mf-radio value="medium">Medium</mf-radio>
  <mf-radio value="large">Large</mf-radio>
</mf-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');

  radioGroup.addEventListener('mf-change', () => {
    radioGroup.size = radioGroup.value;
  });
</script>
```

```jsx react
import { useState } from 'react';
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <MfRadioGroup
        label="Select an option"
        size={size}
        value={size}
        class="radio-group-size"
        onMfChange={event => setSize(event.target.value)}
      >
        <MfRadio value="small">Small</MfRadio>
        <MfRadio value="medium">Medium</MfRadio>
        <MfRadio value="large">Large</MfRadio>
      </MfRadioGroup>
    </>
  );
};
```

:::tip
[Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a `size` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.
:::

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <mf-radio-group label="Select an option" name="a" required>
    <mf-radio value="1">Option 1</mf-radio>
    <mf-radio value="2">Option 2</mf-radio>
    <mf-radio value="3">Option 3</mf-radio>
  </mf-radio-group>
  <br />
  <mf-button type="submit" variant="primary">Submit</mf-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <MfRadioGroup label="Select an option" name="a" required onMfChange={handleChange}>
        <MfRadio value="1">
          Option 1
        </MfRadio>
        <MfRadiovalue="2">
          Option 2
        </MfRadio>
        <MfRadio value="3">
          Option 3
        </MfRadio>
      </MfRadioGroup>
      <br />
      <MfButton type="submit" variant="primary">
        Submit
      </MfButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <mf-radio-group label="Select an option" name="a" value="1">
    <mf-radio value="1">Not me</mf-radio>
    <mf-radio value="2">Me neither</mf-radio>
    <mf-radio value="3">Choose me</mf-radio>
  </mf-radio-group>
  <br />
  <mf-button type="submit" variant="primary">Submit</mf-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('mf-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('mf-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('mf-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { useEffect, useRef } from 'react';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfRadio from 'maf-ui-kit/dist/react/radio';
import MfRadioGroup from 'maf-ui-kit/dist/react/radio-group';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <MfRadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onMfChange={handleChange}>
        <MfRadio value="1">Not me</MfRadio>
        <MfRadio value="2">Me neither</MfRadio>
        <MfRadio value="3">Choose me</MfRadio>
      </MfRadioGroup>
      <br />
      <MfButton type="submit" variant="primary">
        Submit
      </MfButton>
    </form>
  );
};
```
