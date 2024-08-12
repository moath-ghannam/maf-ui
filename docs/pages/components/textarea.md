---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
---

```html:preview
<mf-textarea></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<mf-textarea label="Comments"></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-textarea label="Feedback" help-text="Please tell us what you think."> </mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html:preview
<mf-textarea rows="2"></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<mf-textarea placeholder="Type something"></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html:preview
<mf-textarea placeholder="Type something" filled></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html:preview
<mf-textarea placeholder="Textarea" disabled></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html:preview
<mf-textarea placeholder="Small" size="small"></mf-textarea>
<br />
<mf-textarea placeholder="Medium" size="medium"></mf-textarea>
<br />
<mf-textarea placeholder="Large" size="large"></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => (
  <>
    <MfTextarea placeholder="Small" size="small"></MfTextarea>
    <br />
    <MfTextarea placeholder="Medium" size="medium"></MfTextarea>
    <br />
    <MfTextarea placeholder="Large" size="large"></MfTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html:preview
<mf-textarea resize="none"></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html:preview
<mf-textarea resize="auto"></mf-textarea>
```

```jsx:react
import MfTextarea from 'maf-ui-kit/dist/react/textarea';

const App = () => <MfTextarea resize="auto" />;
```
