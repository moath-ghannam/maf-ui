---
meta:
  title: Spinner
  description: Spinners are used to show the progress of an indeterminate operation.
layout: component
---

```html:preview
<mf-spinner></mf-spinner>
```

```jsx:react
import MfSpinner from 'maf-ui-kit/dist/react/spinner';

const App = () => <MfSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html:preview
<mf-spinner></mf-spinner>
<mf-spinner style="font-size: 2rem;"></mf-spinner>
<mf-spinner style="font-size: 3rem;"></mf-spinner>
```

{% raw %}

```jsx:react
import MfSpinner from 'maf-ui-kit/dist/react/spinner';

const App = () => (
  <>
    <MfSpinner />
    <MfSpinner style={{ fontSize: '2rem' }} />
    <MfSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

{% endraw %}

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html:preview
<mf-spinner style="font-size: 50px; --track-width: 10px;"></mf-spinner>
```

{% raw %}

```jsx:react
import MfSpinner from 'maf-ui-kit/dist/react/spinner';

const App = () => (
  <MfSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

{% endraw %}

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html:preview
<mf-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></mf-spinner>
```

{% raw %}

```jsx:react
import MfSpinner from 'maf-ui-kit/dist/react/spinner';

const App = () => (
  <MfSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

{% endraw %}
