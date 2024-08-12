---
meta:
  title: Format Number
  description: Formats a number using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html:preview
<div class="format-number-overview">
  <mf-format-number value="1000"></mf-format-number>
  <br /><br />
  <mf-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></mf-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('mf-format-number');
  const input = container.querySelector('mf-input');

  input.addEventListener('mf-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfFormatNumber from 'maf-ui-kit/dist/react/format-number';
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <MfFormatNumber value={value} />
      <br />
      <br />
      <MfInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onMfInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

{% endraw %}

## Examples

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html:preview
<mf-format-number type="percent" value="0"></mf-format-number><br />
<mf-format-number type="percent" value="0.25"></mf-format-number><br />
<mf-format-number type="percent" value="0.50"></mf-format-number><br />
<mf-format-number type="percent" value="0.75"></mf-format-number><br />
<mf-format-number type="percent" value="1"></mf-format-number>
```

```jsx:react
import MfFormatNumber from 'maf-ui-kit/dist/react/format-number';

const App = () => (
  <>
    <MfFormatNumber type="percent" value={0} />
    <br />
    <MfFormatNumber type="percent" value={0.25} />
    <br />
    <MfFormatNumber type="percent" value={0.5} />
    <br />
    <MfFormatNumber type="percent" value={0.75} />
    <br />
    <MfFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
English: <mf-format-number value="2000" lang="en" minimum-fraction-digits="2"></mf-format-number><br />
German: <mf-format-number value="2000" lang="de" minimum-fraction-digits="2"></mf-format-number><br />
Russian: <mf-format-number value="2000" lang="ru" minimum-fraction-digits="2"></mf-format-number>
```

```jsx:react
import MfFormatNumber from 'maf-ui-kit/dist/react/format-number';

const App = () => (
  <>
    English: <MfFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <MfFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <MfFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html:preview
<mf-format-number type="currency" currency="USD" value="2000" lang="en-US"></mf-format-number><br />
<mf-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></mf-format-number><br />
<mf-format-number type="currency" currency="EUR" value="2000" lang="de"></mf-format-number><br />
<mf-format-number type="currency" currency="RUB" value="2000" lang="ru"></mf-format-number><br />
<mf-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></mf-format-number>
```

```jsx:react
import MfFormatNumber from 'maf-ui-kit/dist/react/format-number';

const App = () => (
  <>
    <MfFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <MfFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <MfFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <MfFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <MfFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```
