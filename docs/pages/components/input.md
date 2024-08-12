---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
---

```html:preview
<mf-input></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<mf-input label="What is your name?"></mf-input>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-input label="Nickname" help-text="What would you like people to call you?"></mf-input>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<mf-input placeholder="Type something"></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<mf-input placeholder="Clearable" clearable></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<mf-input type="password" placeholder="Password Toggle" password-toggle></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<mf-input placeholder="Type something" filled></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<mf-input placeholder="Disabled" disabled></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => <MfInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html:preview
<mf-input placeholder="Small" size="small"></mf-input>
<br />
<mf-input placeholder="Medium" size="medium"></mf-input>
<br />
<mf-input placeholder="Large" size="large"></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => (
  <>
    <MfInput placeholder="Small" size="small" />
    <br />
    <MfInput placeholder="Medium" size="medium" />
    <br />
    <MfInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html:preview
<mf-input placeholder="Small" size="small" pill></mf-input>
<br />
<mf-input placeholder="Medium" size="medium" pill></mf-input>
<br />
<mf-input placeholder="Large" size="large" pill></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => (
  <>
    <MfInput placeholder="Small" size="small" pill />
    <br />
    <MfInput placeholder="Medium" size="medium" pill />
    <br />
    <MfInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html:preview
<mf-input type="email" placeholder="Email"></mf-input>
<br />
<mf-input type="number" placeholder="Number"></mf-input>
<br />
<mf-input type="date" placeholder="Date"></mf-input>
```

```jsx:react
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => (
  <>
    <MfInput type="email" placeholder="Email" />
    <br />
    <MfInput type="number" placeholder="Number" />
    <br />
    <MfInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<mf-input placeholder="Small" size="small">
  <mf-icon name="house" slot="prefix"></mf-icon>
  <mf-icon name="chat" slot="suffix"></mf-icon>
</mf-input>
<br />
<mf-input placeholder="Medium" size="medium">
  <mf-icon name="house" slot="prefix"></mf-icon>
  <mf-icon name="chat" slot="suffix"></mf-icon>
</mf-input>
<br />
<mf-input placeholder="Large" size="large">
  <mf-icon name="house" slot="prefix"></mf-icon>
  <mf-icon name="chat" slot="suffix"></mf-icon>
</mf-input>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => (
  <>
    <MfInput placeholder="Small" size="small">
      <MfIcon name="house" slot="prefix"></MfIcon>
      <MfIcon name="chat" slot="suffix"></MfIcon>
    </MfInput>
    <br />
    <MfInput placeholder="Medium" size="medium">
      <MfIcon name="house" slot="prefix"></MfIcon>
      <MfIcon name="chat" slot="suffix"></MfIcon>
    </MfInput>
    <br />
    <MfInput placeholder="Large" size="large">
      <MfIcon name="house" slot="prefix"></MfIcon>
      <MfIcon name="chat" slot="suffix"></MfIcon>
    </MfInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html:preview
<mf-input class="label-on-left" label="Name" help-text="Enter your name"></mf-input>
<mf-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></mf-input>
<mf-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></mf-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--mf-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--mf-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```
