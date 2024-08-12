---
meta:
  title: Progress Ring
  description: Progress rings are used to show the progress of a determinate operation in a circular fashion.
layout: component
---

```html:preview
<mf-progress-ring value="25"></mf-progress-ring>
```

```jsx:react
import MfProgressRing from 'maf-ui-kit/dist/react/progress-ring';

const App = () => <MfProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html:preview
<mf-progress-ring value="50" style="--size: 200px;"></mf-progress-ring>
```

{% raw %}

```jsx:react
import MfProgressRing from 'maf-ui-kit/dist/react/progress-ring';

const App = () => <MfProgressRing value="50" style={{ '--size': '200px' }} />;
```

{% endraw %}

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html:preview
<mf-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></mf-progress-ring>
```

{% raw %}

```jsx:react
import MfProgressRing from 'maf-ui-kit/dist/react/progress-ring';

const App = () => <MfProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

{% endraw %}

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html:preview
<mf-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></mf-progress-ring>
```

{% raw %}

```jsx:react
import MfProgressRing from 'maf-ui-kit/dist/react/progress-ring';

const App = () => (
  <MfProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

{% endraw %}

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html:preview
<mf-progress-ring value="50" label="Upload progress"></mf-progress-ring>
```

```jsx:react
import MfProgressRing from 'maf-ui-kit/dist/react/progress-ring';

const App = () => <MfProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html:preview
<mf-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</mf-progress-ring>

<br />

<mf-button circle><mf-icon name="dash" label="Decrease"></mf-icon></mf-button>
<mf-button circle><mf-icon name="plus" label="Increase"></mf-icon></mf-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfProgressRing from 'maf-ui-kit/dist/react/progress-ring';

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
      <MfProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </MfProgressRing>

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

{% endraw %}
