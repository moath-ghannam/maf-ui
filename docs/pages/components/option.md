---
meta:
  title: Option
  description: Options define the selectable items within various form controls such as select.
layout: component
---

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
  <MfSelect>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2">Option 2</MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html:preview
<mf-select label="Select one">
  <mf-option value="option-1">Option 1</mf-option>
  <mf-option value="option-2" disabled>Option 2</mf-option>
  <mf-option value="option-3">Option 3</mf-option>
</mf-select>
```

```jsx:react
import MfOption from 'maf-ui-kit/dist/react/option';
import MfSelect from 'maf-ui-kit/dist/react/select';

const App = () => (
  <MfSelect>
    <MfOption value="option-1">Option 1</MfOption>
    <MfOption value="option-2" disabled>
      Option 2
    </MfOption>
    <MfOption value="option-3">Option 3</MfOption>
  </MfSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<mf-select label="Select one">
  <mf-option value="option-1">
    <mf-icon slot="prefix" name="envelope"></mf-icon>
    Email
    <mf-icon slot="suffix" name="patch-check"></mf-icon>
  </mf-option>

  <mf-option value="option-2">
    <mf-icon slot="prefix" name="telephone"></mf-icon>
    Phone
    <mf-icon slot="suffix" name="patch-check"></mf-icon>
  </mf-option>

  <mf-option value="option-3">
    <mf-icon slot="prefix" name="chat-dots"></mf-icon>
    Chat
    <mf-icon slot="suffix" name="patch-check"></mf-icon>
  </mf-option>
</mf-select>
```
