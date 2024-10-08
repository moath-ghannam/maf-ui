---
meta:
  title: Progress Bar
  description: Progress bars are used to show the status of an ongoing operation.
layout: component
---

```html:preview
<mf-progress-bar value="50"></mf-progress-bar>
```

```jsx:react
import MfProgressBar from 'maf-ui-kit/dist/react/progress-bar';

const App = () => <MfProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html:preview
<mf-progress-bar value="50" label="Upload progress"></mf-progress-bar>
```

```jsx:react
import MfProgressBar from 'maf-ui-kit/dist/react/progress-bar';

const App = () => <MfProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html:preview
<mf-progress-bar value="50" style="--height: 6px;"></mf-progress-bar>
```

{% raw %}

```jsx:react
import MfProgressBar from 'maf-ui-kit/dist/react/progress-bar';

const App = () => <MfProgressBar value={50} style={{ '--height': '6px' }} />;
```

{% endraw %}

### Showing Values

Use the default slot to show a value.

```html:preview
<mf-progress-bar value="50" class="progress-bar-values">50%</mf-progress-bar>

<br />

<mf-button circle><mf-icon name="dash" label="Decrease"></mf-icon></mf-button>
<mf-button circle><mf-icon name="plus" label="Increase"></mf-icon></mf-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfProgressBar from 'maf-ui-kit/dist/react/progress-bar';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <MfProgressBar value={value}>{value}%</MfProgressBar>

      <br />

      <MfButton circle onClick={() => adjustValue(-10)}>
        <MfIcon name="dash" label="Decrease" />
      </MfButton>

      <MfButton circle onClick={() => adjustValue(10)}>
        <MfIcon name="plus" label="Increase" />
      </MfButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html:preview
<mf-progress-bar indeterminate></mf-progress-bar>
```

```jsx:react
import MfProgressBar from 'maf-ui-kit/dist/react/progress-bar';

const App = () => <MfProgressBar indeterminate />;
```
