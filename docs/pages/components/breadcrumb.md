---
meta:
  title: Breadcrumb
  description: Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
layout: component
---

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html:preview
<mf-breadcrumb>
  <mf-breadcrumb-item>Catalog</mf-breadcrumb-item>
  <mf-breadcrumb-item>Clothing</mf-breadcrumb-item>
  <mf-breadcrumb-item>Women's</mf-breadcrumb-item>
  <mf-breadcrumb-item>Shirts &amp; Tops</mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import MfBreadcrumb from 'maf-ui-kit/dist/react/breadcrumb';
import MfBreadcrumbItem from 'maf-ui-kit/dist/react/breadcrumb-item';

const App = () => (
  <MfBreadcrumb>
    <MfBreadcrumbItem>Catalog</MfBreadcrumbItem>
    <MfBreadcrumbItem>Clothing</MfBreadcrumbItem>
    <MfBreadcrumbItem>Women's</MfBreadcrumbItem>
    <MfBreadcrumbItem>Shirts &amp; Tops</MfBreadcrumbItem>
  </MfBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html:preview
<mf-breadcrumb>
  <mf-breadcrumb-item href="https://example.com/home">Homepage</mf-breadcrumb-item>

  <mf-breadcrumb-item href="https://example.com/home/services">Our Services</mf-breadcrumb-item>

  <mf-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</mf-breadcrumb-item>

  <mf-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import MfBreadcrumb from 'maf-ui-kit/dist/react/breadcrumb';
import MfBreadcrumbItem from 'maf-ui-kit/dist/react/breadcrumb-item';

const App = () => (
  <MfBreadcrumb>
    <MfBreadcrumbItem href="https://example.com/home">Homepage</MfBreadcrumbItem>

    <MfBreadcrumbItem href="https://example.com/home/services">Our Services</MfBreadcrumbItem>

    <MfBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</MfBreadcrumbItem>

    <MfBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</MfBreadcrumbItem>
  </MfBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html:preview
<mf-breadcrumb>
  <mf-icon name="dot" slot="separator"></mf-icon>
  <mf-breadcrumb-item>First</mf-breadcrumb-item>
  <mf-breadcrumb-item>Second</mf-breadcrumb-item>
  <mf-breadcrumb-item>Third</mf-breadcrumb-item>
</mf-breadcrumb>

<br />

<mf-breadcrumb>
  <mf-icon name="arrow-right" slot="separator"></mf-icon>
  <mf-breadcrumb-item>First</mf-breadcrumb-item>
  <mf-breadcrumb-item>Second</mf-breadcrumb-item>
  <mf-breadcrumb-item>Third</mf-breadcrumb-item>
</mf-breadcrumb>

<br />

<mf-breadcrumb>
  <span slot="separator">/</span>
  <mf-breadcrumb-item>First</mf-breadcrumb-item>
  <mf-breadcrumb-item>Second</mf-breadcrumb-item>
  <mf-breadcrumb-item>Third</mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import 'maf-ui-kit/dist/components/icon/icon.js';
import MfBreadcrumb from 'maf-ui-kit/dist/react/breadcrumb';
import MfBreadcrumbItem from 'maf-ui-kit/dist/react/breadcrumb-item';

const App = () => (
  <>
    <MfBreadcrumb>
      <mf-icon name="dot" slot="separator" />
      <MfBreadcrumbItem>First</MfBreadcrumbItem>
      <MfBreadcrumbItem>Second</MfBreadcrumbItem>
      <MfBreadcrumbItem>Third</MfBreadcrumbItem>
    </MfBreadcrumb>

    <br />

    <MfBreadcrumb>
      <mf-icon name="arrow-right" slot="separator" />
      <MfBreadcrumbItem>First</MfBreadcrumbItem>
      <MfBreadcrumbItem>Second</MfBreadcrumbItem>
      <MfBreadcrumbItem>Third</MfBreadcrumbItem>
    </MfBreadcrumb>

    <br />

    <MfBreadcrumb>
      <span slot="separator">/</span>
      <MfBreadcrumbItem>First</MfBreadcrumbItem>
      <MfBreadcrumbItem>Second</MfBreadcrumbItem>
      <MfBreadcrumbItem>Third</MfBreadcrumbItem>
    </MfBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html:preview
<mf-breadcrumb>
  <mf-breadcrumb-item>
    <mf-icon slot="prefix" name="house"></mf-icon>
    Home
  </mf-breadcrumb-item>
  <mf-breadcrumb-item>Articles</mf-breadcrumb-item>
  <mf-breadcrumb-item>Traveling</mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import MfBreadcrumb from 'maf-ui-kit/dist/react/breadcrumb';
import MfBreadcrumbItem from 'maf-ui-kit/dist/react/breadcrumb-item';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <MfBreadcrumb>
    <MfBreadcrumbItem>
      <MfIcon slot="prefix" name="house" />
      Home
    </MfBreadcrumbItem>
    <MfBreadcrumbItem>Articles</MfBreadcrumbItem>
    <MfBreadcrumbItem>Traveling</MfBreadcrumbItem>
  </MfBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html:preview
<mf-breadcrumb>
  <mf-breadcrumb-item>Documents</mf-breadcrumb-item>
  <mf-breadcrumb-item>Policies</mf-breadcrumb-item>
  <mf-breadcrumb-item>
    Security
    <mf-icon slot="suffix" name="shield-lock"></mf-icon>
  </mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import MfBreadcrumb from 'maf-ui-kit/dist/react/breadcrumb';
import MfBreadcrumbItem from 'maf-ui-kit/dist/react/breadcrumb-item';
import MfIcon from 'maf-ui-kit/dist/react/icon';

const App = () => (
  <MfBreadcrumb>
    <MfBreadcrumbItem>Documents</MfBreadcrumbItem>
    <MfBreadcrumbItem>Policies</MfBreadcrumbItem>
    <MfBreadcrumbItem>
      Security
      <MfIcon slot="suffix" name="shield-lock"></MfIcon>
    </MfBreadcrumbItem>
  </MfBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html:preview
<mf-breadcrumb>
  <mf-breadcrumb-item>Homepage</mf-breadcrumb-item>
  <mf-breadcrumb-item>Our Services</mf-breadcrumb-item>
  <mf-breadcrumb-item>Digital Media</mf-breadcrumb-item>
  <mf-breadcrumb-item>
    Web Design
    <mf-dropdown slot="suffix">
      <mf-button slot="trigger" size="small" circle>
        <mf-icon label="More options" name="three-dots"></mf-icon>
      </mf-button>
      <mf-menu>
        <mf-menu-item type="checkbox" checked>Web Design</mf-menu-item>
        <mf-menu-item type="checkbox">Web Development</mf-menu-item>
        <mf-menu-item type="checkbox">Marketing</mf-menu-item>
      </mf-menu>
    </mf-dropdown>
  </mf-breadcrumb-item>
</mf-breadcrumb>
```

```jsx:react
import {
  MfBreadcrumb,
  MfBreadcrumbItem,
  MfButton,
  MfDropdown,
  MfIcon,
  MfMenu,
  MfMenuItem
} from 'maf-ui-kit/dist/react';

const App = () => (
  <MfBreadcrumb>
    <MfBreadcrumbItem>Homepage</MfBreadcrumbItem>
    <MfBreadcrumbItem>Our Services</MfBreadcrumbItem>
    <MfBreadcrumbItem>Digital Media</MfBreadcrumbItem>
    <MfBreadcrumbItem>
      Web Design
      <MfDropdown slot="suffix">
        <MfButton slot="trigger" size="small" circle>
          <MfIcon label="More options" name="three-dots"></MfIcon>
        </MfButton>
        <MfMenu>
          <MfMenuItem type="checkbox" checked>
            Web Design
          </MfMenuItem>
          <MfMenuItem type="checkbox">Web Development</MfMenuItem>
          <MfMenuItem type="checkbox">Marketing</MfMenuItem>
        </MfMenu>
      </MfDropdown>
    </MfBreadcrumbItem>
  </MfBreadcrumb>
);
```
