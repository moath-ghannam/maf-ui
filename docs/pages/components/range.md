---
meta:
  title: Range
  description: Ranges allow the user to select a single value within a given range using a slider.
layout: component
---

```html:preview
<mf-range></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<mf-range label="Volume" min="0" max="100"></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange label="Volume" min={0} max={100} />;
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<mf-range label="Volume" help-text="Controls the volume of the current song." min="0" max="100"></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange label="Volume" help-text="Controls the volume of the current song." min={0} max={100} />;
```

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html:preview
<mf-range min="0" max="10" step="1"></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange min={0} max={10} step={1} />;
```

### Disabled

Use the `disabled` attribute to disable a slider.

```html:preview
<mf-range disabled></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange disabled />;
```

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html:preview
<mf-range tooltip="bottom"></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange tooltip="bottom" />;
```

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html:preview
<mf-range tooltip="none"></mf-range>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange tooltip="none" />;
```

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html:preview
<mf-range
  style="
  --track-color-active: var(--mf-color-primary-600);
  --track-color-inactive: var(--mf-color-primary-100);
"
></mf-range>
```

{% raw %}

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => (
  <MfRange
    style={{
      '--track-color-active': 'var(--mf-color-primary-600)',
      '--track-color-inactive': 'var(--mf-color-primary-200)'
    }}
  />
);
```

{% endraw %}

### Custom Track Offset

You can customize the initial offset of the active track using the `--track-active-offset` custom property.

```html:preview
<mf-range
  min="-100"
  max="100"
  style="
  --track-color-active: var(--mf-color-primary-600);
  --track-color-inactive: var(--mf-color-primary-100);
  --track-active-offset: 50%;
"
></mf-range>
```

{% raw %}

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => (
  <MfRange
    min={-100}
    max={100}
    style={{
      '--track-color-active': 'var(--mf-color-primary-600)',
      '--track-color-inactive': 'var(--mf-color-primary-200)',
      '--track-active-offset': '50%'
    }}
  />
);
```

{% endraw %}

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html:preview
<mf-range min="0" max="100" step="1" class="range-with-custom-formatter"></mf-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

```jsx:react
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => <MfRange min={0} max={100} step={1} tooltipFormatter={value => `Total - ${value}%`} />;
```
