---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

```html:preview
<mf-breadcrumb>
  <mf-breadcrumb-item>
    <mf-icon slot="prefix" name="house"></mf-icon>
    Home
  </mf-breadcrumb-item>
  <mf-breadcrumb-item>Clothing</mf-breadcrumb-item>
  <mf-breadcrumb-item>Shirts</mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import MfBreadcrumb from 'maf-ui-kit/dist/react/breadcrumb';
import MfBreadcrumbItem from 'maf-ui-kit/dist/react/breadcrumb-item';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <MfBreadcrumb>
    <MfBreadcrumbItem>
      <MfIcon slot="prefix" name="house"></MfIcon>
      Home
    </MfBreadcrumbItem>
    <MfBreadcrumbItem>Clothing</MfBreadcrumbItem>
    <MfBreadcrumbItem>Shirts</MfBreadcrumbItem>
  </MfBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
