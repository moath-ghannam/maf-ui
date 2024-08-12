---
meta:
  title: Select
  description: Selects allow you to choose items from a menu of predefined options.
layout: component
---

```html:preview
<mf-select>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
  <mf-option value="option-4">Option 4</mf-option>
  <mf-option value="option-5">Option 5</mf-option>
  <mf-option value="option-6">Option 6</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
    <MfOption value="option-4">Option 4</MfOption>
    <MfOption value="option-5">Option 5</MfOption>
    <MfOption value="option-6">Option 6</MfOption>
  </MfSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<mf-select label="Select one">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect label="Select one">
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-select label="Experience" help-text="Please tell us your skill level.">
  <mf-option value="1">Novice</mf-option>
  <mf-option value="2">Intermediate</mf-option>
  <mf-option value="3">Advanced</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect label="Experience" help-text="Please tell us your skill level.">
    <MfOption value="1">Novice</MfOption>
    <MfOption value="2">Intermediate</MfOption>
    <MfOption value="3">Advanced</MfOption>
  </MfSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<mf-select placeholder="Select one">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect placeholder="Select one">
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html:preview
<mf-select clearable value="option-1">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect placeholder="Clearable" clearable>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<mf-select filled>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect filled>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html:preview
<mf-select pill>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect pill>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html:preview
<mf-select placeholder="Disabled" disabled>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect placeholder="Disabled" disabled>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<mf-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
  <mf-option value="option-4">Option 4</mf-option>
  <mf-option value="option-5">Option 5</mf-option>
  <mf-option value="option-6">Option 6</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect label="Select a Few" value={["option-1", "option-2", "option-3"]} multiple clearable>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
    <MfOption value="option-4">Option 4</MfOption>
    <MfOption value="option-5">Option 5</MfOption>
    <MfOption value="option-6">Option 6</MfOption>
  </MfSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Setting Initial Values

Use the `value` attribute to set the initial selection.

When using `multiple`, the `value` _attribute_ uses space-delimited values to select more than one option. Because of this, `<mf-option>` values cannot contain spaces. If you're accessing the `value` _property_ through Javascript, it will be an array.

```html:preview
<mf-select value="option-1 option-2" multiple clearable>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
  <mf-option value="option-4">Option 4</mf-option>
</mf-select>
```

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect value={["option-1", "option-2"]} multiple clearable>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Grouping Options

Use `<mf-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html:preview
<mf-select>
  <small>Section 1</small>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
  <mf-divider></mf-divider>
  <small>Section 2</small>
  <mf-option value="option-4">Option 4</mf-option>
  <mf-option value="option-5">Option 5</mf-option>
  <mf-option value="option-6">Option 6</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
    <MfOption value="option-4">Option 4</MfOption>
    <MfOption value="option-5">Option 5</MfOption>
    <MfOption value="option-6">Option 6</MfOption>
  </MfSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html:preview
<mf-select placeholder="Small" size="small">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>

<br />

<mf-select placeholder="Medium" size="medium">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>

<br />

<mf-select placeholder="Large" size="large">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <>
    <MfSelect placeholder="Small" size="small">
      <MfOption value="option-1">Option 1</MfOption>
      <MfOption value="option-2">Option 2</MfOption>
      <MfOption value="option-3">Option 3</MfOption>
    </MfSelect>

    <br />

    <MfSelect placeholder="Medium" size="medium">
      <MfOption value="option-1">Option 1</MfOption>
      <MfOption value="option-2">Option 2</MfOption>
      <MfOption value="option-3">Option 3</MfOption>
    </MfSelect>

    <br />

    <MfSelect placeholder="Large" size="large">
      <MfOption value="option-1">Option 1</MfOption>
      <MfOption value="option-2">Option 2</MfOption>
      <MfOption value="option-3">Option 3</MfOption>
    </MfSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<mf-select placement="top">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect placement="top">
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfDropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the control.

```html:preview
<mf-select placeholder="Small" size="small" clearable>
  <mf-icon name="house" slot="prefix"></mf-icon>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
<br />
<mf-select placeholder="Medium" size="medium" clearable>
  <mf-icon name="house" slot="prefix"></mf-icon>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
<br />
<mf-select placeholder="Large" size="large" clearable>
  <mf-icon name="house" slot="prefix"></mf-icon>
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2">Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <>
    <MfSelect placeholder="Small" size="small">
      <MfIcon name="house" slot="prefix"></MfIcon>
      <MfOption value="option-1">Option 1</MfOption>
      <MfOption value="option-2">Option 2</MfOption>
      <MfOption value="option-3">Option 3</MfOption>
    </MfSelect>
    <br />
    <MfSelect placeholder="Medium" size="medium">
      <MfIcon name="house" slot="prefix"></MfIcon>
      <MfOption value="option-1">Option 1</MfOption>
      <MfOption value="option-2">Option 2</MfOption>
      <MfOption value="option-3">Option 3</MfOption>
    </MfSelect>
    <br />
    <MfSelect placeholder="Large" size="large">
      <MfIcon name="house" slot="prefix"></MfIcon>
      <MfOption value="option-1">Option 1</MfOption>
      <MfOption value="option-2">Option 2</MfOption>
      <MfOption value="option-3">Option 3</MfOption>
    </MfSelect>
  </>
);
```

### Custom Tags

When multiple options can be selected, you can provide custom tags by passing a function to the `getTag` property. Your function can return a string of HTML, a <a href="https://lit.dev/docs/templates/overview/">Lit Template</a>, or an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The `getTag()` function will be called for each option. The first argument is an `<mf-option>` element and the second argument is the tag's index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the `style` attribute in your template or you can add your own [parts](/getting-started/customizing/#css-parts) and target them with the [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.

```html:preview
<mf-select
  placeholder="Select one"
  value="email phone"
  multiple
  clearable
  class="custom-tag"
>
  <mf-option value="email">
    <mf-icon slot="prefix" name="envelope"></mf-icon>
    Email
  </mf-option>
  <mf-option value="phone">
    <mf-icon slot="prefix" name="telephone"></mf-icon>
    Phone
  </mf-option>
  <mf-option value="chat">
    <mf-icon slot="prefix" name="chat-dots"></mf-icon>
    Chat
  </mf-option>
</mf-select>

<script type="module">
  const select = document.querySelector('.custom-tag');

  select.getTag = (option, index) => {
    // Use the same icon used in the <mf-option>
    const name = option.querySelector('mf-icon[slot="prefix"]').name;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <mf-tag removable>
        <mf-icon name="${name}" style="padding-inline-end: .5rem;"></mf-icon>
        ${option.getTextLabel()}
      </mf-tag>
    `;
  };
</script>
```

:::warning
Be sure you trust the content you are outputting! Passing unsanitized user input to `getTag()` can result in XSS vulnerabilities.
:::
