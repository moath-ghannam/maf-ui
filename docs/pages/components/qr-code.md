---
meta:
  title: QR Code
  description: Generates a QR code and renders it using the Canvas API.
layout: component
---

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html:preview
<div class="qr-overview">
  <mf-qr-code value="https://maf-ui/" label="Scan this code to visit maf-ui on the web!"></mf-qr-code>
  <br />

  <mf-input maxlength="255" clearable label="Value"></mf-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('mf-qr-code');
  const input = container.querySelector('mf-input');

  customElements.whenDefined('mf-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('mf-input', () => (qrCode.value = input.value));
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview mf-input {
    margin-top: 1rem;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import MfQrCode from 'maf-ui-kit/dist/react/qr-code';
import MfInput from 'maf-ui-kit/dist/react/input';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview mf-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://maf-ui/');

  return (
    <>
      <div className="qr-overview">
        <MfQrCode value={value} label="Scan this code to visit maf-ui on the web!" />
        <br />

        <MfInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html:preview
<mf-qr-code value="https://maf-ui/" fill="deeppink" background="white"></mf-qr-code>
```

```jsx:react
import MfQrCode from 'maf-ui-kit/dist/react/qr-code';

const App = () => <MfQrCode value="https://maf-ui/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html:preview
<mf-qr-code value="https://maf-ui/" size="64"></mf-qr-code>
```

```jsx:react
import MfQrCode from 'maf-ui-kit/dist/react/qr-code';

const App = () => <MfQrCode value="https://maf-ui/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html:preview
<mf-qr-code value="https://maf-ui/" radius="0.5"></mf-qr-code>
```

```jsx:react
import MfQrCode from 'maf-ui-kit/dist/react/qr-code';

const App = () => <MfQrCode value="https://maf-ui/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html:preview
<div class="qr-error-correction">
  <mf-qr-code value="https://maf-ui/" error-correction="L"></mf-qr-code>
  <mf-qr-code value="https://maf-ui/" error-correction="M"></mf-qr-code>
  <mf-qr-code value="https://maf-ui/" error-correction="Q"></mf-qr-code>
  <mf-qr-code value="https://maf-ui/" error-correction="H"></mf-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx:react
import MfQrCode from 'maf-ui-kit/dist/react/qr-code';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <MfQrCode value="https://maf-ui/" error-correction="L" />
        <MfQrCode value="https://maf-ui/" error-correction="M" />
        <MfQrCode value="https://maf-ui/" error-correction="Q" />
        <MfQrCode value="https://maf-ui/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```
