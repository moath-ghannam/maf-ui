---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<mf-checkbox>Checkbox</mf-checkbox>
```

```jsx:react
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => <MfCheckbox>Checkbox</MfCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<mf-checkbox checked>Checked</mf-checkbox>
```

```jsx:react
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => <MfCheckbox checked>Checked</MfCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html:preview
<mf-checkbox indeterminate>Indeterminate</mf-checkbox>
```

```jsx:react
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => <MfCheckbox indeterminate>Indeterminate</MfCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<mf-checkbox disabled>Disabled</mf-checkbox>
```

```jsx:react
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => <MfCheckbox disabled>Disabled</MfCheckbox>;
```

### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<mf-checkbox size="small">Small</mf-checkbox>
<br />
<mf-checkbox size="medium">Medium</mf-checkbox>
<br />
<mf-checkbox size="large">Large</mf-checkbox>
```

```jsx:react
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => (
  <>
    <MfCheckbox size="small">Small</MfCheckbox>
    <br />
    <MfCheckbox size="medium">Medium</MfCheckbox>
    <br />
    <MfCheckbox size="large">Large</MfCheckbox>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-checkbox help-text="What should the user know about the checkbox?">Label</mf-checkbox>
```

```jsx:react
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => <MfCheckbox help-text="What should the user know about the switch?">Label</MfCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <mf-checkbox>Check me</mf-checkbox>
  <br />
  <mf-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</mf-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('mf-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('mf-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('mf-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfCheckbox from 'maf-ui-kit/dist/react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <MfCheckbox ref={checkbox} onMfChange={handleChange}>
        Check me
      </MfCheckbox>
      <br />
      <MfButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </MfButton>
    </form>
  );
};
```

{% endraw %}
