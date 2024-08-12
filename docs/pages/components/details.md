---
meta:
  title: Details
  description: Details show a brief summary and expand to show additional content.
layout: component
---

<!-- cspell:dictionaries lorem-ipsum -->

```html:preview
<mf-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</mf-details>
```

```jsx:react
import MfDetails from 'maf-ui-kit/dist/react/details';

const App = () => (
  <MfDetails summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </MfDetails>
);
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html:preview
<mf-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</mf-details>
```

```jsx:react
import MfDetails from 'maf-ui-kit/dist/react/details';

const App = () => (
  <MfDetails summary="Disabled" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </MfDetails>
);
```

### Customizing the Summary Icon

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `summary-icon` part as shown below.

```html:preview
<mf-details summary="Toggle Me" class="custom-icons">
  <mf-icon name="plus-square" slot="expand-icon"></mf-icon>
  <mf-icon name="dash-square" slot="collapse-icon"></mf-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</mf-details>

<style>
  mf-details.custom-icons::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

```jsx:react
import MfDetails from 'maf-ui-kit/dist/react/details';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const css = `
  mf-details.custom-icon::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
`;

const App = () => (
  <>
    <MfDetails summary="Toggle Me" class="custom-icon">
      <MfIcon name="plus-square" slot="expand-icon" />
      <MfIcon name="dash-square" slot="collapse-icon" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MfDetails>

    <style>{css}</style>
  </>
);
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `mf-show` event.

```html:preview
<div class="details-group-example">
  <mf-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </mf-details>

  <mf-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </mf-details>

  <mf-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </mf-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('mf-show', event => {
    if (event.target.localName === 'mf-details') {
      [...container.querySelectorAll('mf-details')].map(details => (details.open = event.target === details));
    }
  });
</script>

<style>
  .details-group-example mf-details:not(:last-of-type) {
    margin-bottom: var(--mf-spacing-2x-small);
  }
</style>
```
