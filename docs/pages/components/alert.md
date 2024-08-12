---
meta:
  title: Alert
  description: Alerts are used to display important messages inline or as toast notifications.
layout: component
---

```html:preview
<mf-alert open>
  <mf-icon slot="icon" name="info-circle"></mf-icon>
  This is a standard alert. You can customize its content and even the icon.
</mf-alert>
```

```jsx:react
import MfAlert from 'maf-ui-kit/dist/react/alert';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <MfAlert open>
    <MfIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </MfAlert>
);
```

:::tip
Alerts will not be visible if the `open` attribute is not present.
:::

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html:preview
<mf-alert variant="primary" open>
  <mf-icon slot="icon" name="info-circle"></mf-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</mf-alert>

<br />

<mf-alert variant="success" open>
  <mf-icon slot="icon" name="check2-circle"></mf-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</mf-alert>

<br />

<mf-alert variant="neutral" open>
  <mf-icon slot="icon" name="gear"></mf-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take effect on next login.
</mf-alert>

<br />

<mf-alert variant="warning" open>
  <mf-icon slot="icon" name="exclamation-triangle"></mf-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</mf-alert>

<br />

<mf-alert variant="danger" open>
  <mf-icon slot="icon" name="exclamation-octagon"></mf-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</mf-alert>
```

```jsx:react
import MfAlert from 'maf-ui-kit/dist/react/alert';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <>
    <MfAlert variant="primary" open>
      <MfIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </MfAlert>

    <br />

    <MfAlert variant="success" open>
      <MfIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </MfAlert>

    <br />

    <MfAlert variant="neutral" open>
      <MfIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take effect on next login.
    </MfAlert>

    <br />

    <MfAlert variant="warning" open>
      <MfIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </MfAlert>

    <br />

    <MfAlert variant="danger" open>
      <MfIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </MfAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html:preview
<mf-alert variant="primary" open closable class="alert-closable">
  <mf-icon slot="icon" name="info-circle"></mf-icon>
  You can close this alert any time!
</mf-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('mf-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import MfAlert from 'maf-ui-kit/dist/react/alert';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <MfAlert open={open} closable onMfAfterHide={handleHide}>
      <MfIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </MfAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html:preview
<mf-alert variant="primary" open> Nothing fancy here, just a simple alert. </mf-alert>
```

```jsx:react
import MfAlert from 'maf-ui-kit/dist/react/alert';

const App = () => (
  <MfAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </MfAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html:preview
<div class="alert-duration">
  <mf-button variant="primary">Show Alert</mf-button>

  <mf-alert variant="primary" duration="3000" closable>
    <mf-icon slot="icon" name="info-circle"></mf-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </mf-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('mf-button');
  const alert = container.querySelector('mf-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration mf-alert {
    margin-top: var(--mf-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import MfAlert from 'maf-ui-kit/dist/react/alert';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const css = `
  .alert-duration mf-alert {
    margin-top: var(--mf-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <MfButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </MfButton>

        <MfAlert variant="primary" duration="3000" open={open} closable onMfAfterHide={() => setOpen(false)}>
          <MfIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </MfAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html:preview
<div class="alert-toast">
  <mf-button variant="primary">Primary</mf-button>
  <mf-button variant="success">Success</mf-button>
  <mf-button variant="neutral">Neutral</mf-button>
  <mf-button variant="warning">Warning</mf-button>
  <mf-button variant="danger">Danger</mf-button>

  <mf-alert variant="primary" duration="3000" closable>
    <mf-icon slot="icon" name="info-circle"></mf-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </mf-alert>

  <mf-alert variant="success" duration="3000" closable>
    <mf-icon slot="icon" name="check2-circle"></mf-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </mf-alert>

  <mf-alert variant="neutral" duration="3000" closable>
    <mf-icon slot="icon" name="gear"></mf-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
  </mf-alert>

  <mf-alert variant="warning" duration="3000" closable>
    <mf-icon slot="icon" name="exclamation-triangle"></mf-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </mf-alert>

  <mf-alert variant="danger" duration="3000" closable>
    <mf-icon slot="icon" name="exclamation-octagon"></mf-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </mf-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`mf-button[variant="${variant}"]`);
    const alert = container.querySelector(`mf-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import MfAlert from 'maf-ui-kit/dist/react/alert';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <MfButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </MfButton>

      <MfButton variant="success" onClick={() => success.current.toast()}>
        Success
      </MfButton>

      <MfButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </MfButton>

      <MfButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </MfButton>

      <MfButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </MfButton>

      <MfAlert ref={primary} variant="primary" duration="3000" closable>
        <MfIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </MfAlert>

      <MfAlert ref={success} variant="success" duration="3000" closable>
        <MfIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </MfAlert>

      <MfAlert ref={neutral} variant="neutral" duration="3000" closable>
        <MfIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take effect on next login.
      </MfAlert>

      <MfAlert ref={warning} variant="warning" duration="3000" closable>
        <MfIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </MfAlert>

      <MfAlert ref={danger} variant="danger" duration="3000" closable>
        <MfIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </MfAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html:preview
<div class="alert-toast-wrapper">
  <mf-button variant="primary">Create Toast</mf-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('mf-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('mf-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <mf-icon name="${icon}" slot="icon"></mf-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.mf-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.mf-toast-stack {
  left: 0;
  right: auto;
}
```

:::tip
By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.
:::
