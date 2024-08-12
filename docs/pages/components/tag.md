---
meta:
  title: Tag
  description: Tags are used as labels to organize things or to indicate a selection.
layout: component
---

```html:preview
<mf-tag variant="primary">Primary</mf-tag>
<mf-tag variant="success">Success</mf-tag>
<mf-tag variant="neutral">Neutral</mf-tag>
<mf-tag variant="warning">Warning</mf-tag>
<mf-tag variant="danger">Danger</mf-tag>
```

```jsx:react
import MfTag from 'maf-ui-kit/dist/react/tag';

const App = () => (
  <>
    <MfTag variant="primary">Primary</MfTag>
    <MfTag variant="success">Success</MfTag>
    <MfTag variant="neutral">Neutral</MfTag>
    <MfTag variant="warning">Warning</MfTag>
    <MfTag variant="danger">Danger</MfTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html:preview
<mf-tag size="small">Small</mf-tag>
<mf-tag size="medium">Medium</mf-tag>
<mf-tag size="large">Large</mf-tag>
```

```jsx:react
import MfTag from 'maf-ui-kit/dist/react/tag';

const App = () => (
  <>
    <MfTag size="small">Small</MfTag>
    <MfTag size="medium">Medium</MfTag>
    <MfTag size="large">Large</MfTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html:preview
<mf-tag size="small" pill>Small</mf-tag>
<mf-tag size="medium" pill>Medium</mf-tag>
<mf-tag size="large" pill>Large</mf-tag>
```

```jsx:react
import MfTag from 'maf-ui-kit/dist/react/tag';

const App = () => (
  <>
    <MfTag size="small" pill>
      Small
    </MfTag>
    <MfTag size="medium" pill>
      Medium
    </MfTag>
    <MfTag size="large" pill>
      Large
    </MfTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html:preview
<div class="tags-removable">
  <mf-tag size="small" removable>Small</mf-tag>
  <mf-tag size="medium" removable>Medium</mf-tag>
  <mf-tag size="large" removable>Large</mf-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('mf-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable mf-tag {
    transition: var(--mf-transition-medium) opacity;
  }
</style>
```

```jsx:react
import MfTag from 'maf-ui-kit/dist/react/tag';

const css = `
  .tags-removable mf-tag {
    transition: var(--mf-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <MfTag size="small" removable onMfRemove={handleRemove}>
          Small
        </MfTag>

        <MfTag size="medium" removable onMfRemove={handleRemove}>
          Medium
        </MfTag>

        <MfTag size="large" removable onMfRemove={handleRemove}>
          Large
        </MfTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
