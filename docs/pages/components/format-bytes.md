---
meta:
  title: Format Bytes
  description: Formats a number as a human readable bytes value.
layout: component
---

```html:preview
<div class="format-bytes-overview">
  The file is <mf-format-bytes value="1000"></mf-format-bytes> in size. <br /><br />
  <mf-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></mf-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('mf-format-bytes');
  const input = container.querySelector('mf-input');

  input.addEventListener('mf-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfFormatBytes from 'maf-ui-kit/dist/react/format-bytes';
import MfInput from 'maf-ui-kit/dist/react/input';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <MfFormatBytes value={value} /> in size.
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

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html:preview
<mf-format-bytes value="12"></mf-format-bytes><br />
<mf-format-bytes value="1200"></mf-format-bytes><br />
<mf-format-bytes value="1200000"></mf-format-bytes><br />
<mf-format-bytes value="1200000000"></mf-format-bytes>
```

```jsx:react
import MfFormatBytes from 'maf-ui-kit/dist/react/format-bytes';

const App = () => (
  <>
    <MfFormatBytes value="12" />
    <br />
    <MfFormatBytes value="1200" />
    <br />
    <MfFormatBytes value="1200000" />
    <br />
    <MfFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html:preview
<mf-format-bytes value="12" unit="bit"></mf-format-bytes><br />
<mf-format-bytes value="1200" unit="bit"></mf-format-bytes><br />
<mf-format-bytes value="1200000" unit="bit"></mf-format-bytes><br />
<mf-format-bytes value="1200000000" unit="bit"></mf-format-bytes>
```

```jsx:react
import MfFormatBytes from 'maf-ui-kit/dist/react/format-bytes';

const App = () => (
  <>
    <MfFormatBytes value="12" unit="bit" />
    <br />
    <MfFormatBytes value="1200" unit="bit" />
    <br />
    <MfFormatBytes value="1200000" unit="bit" />
    <br />
    <MfFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
<mf-format-bytes value="12" lang="de"></mf-format-bytes><br />
<mf-format-bytes value="1200" lang="de"></mf-format-bytes><br />
<mf-format-bytes value="1200000" lang="de"></mf-format-bytes><br />
<mf-format-bytes value="1200000000" lang="de"></mf-format-bytes>
```

```jsx:react
import MfFormatBytes from 'maf-ui-kit/dist/react/format-bytes';

const App = () => (
  <>
    <MfFormatBytes value="12" lang="de" />
    <br />
    <MfFormatBytes value="1200" lang="de" />
    <br />
    <MfFormatBytes value="1200000" lang="de" />
    <br />
    <MfFormatBytes value="1200000000" lang="de" />
  </>
);
```
