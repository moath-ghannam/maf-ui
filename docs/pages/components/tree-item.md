---
meta:
  title: Tree Item
  description: A tree item serves as a hierarchical node that lives inside a tree.
layout: component
---

```html:preview
<mf-tree>
  <mf-tree-item>
    Item 1
    <mf-tree-item>Item A</mf-tree-item>
    <mf-tree-item>Item B</mf-tree-item>
    <mf-tree-item>Item C</mf-tree-item>
  </mf-tree-item>
  <mf-tree-item>Item 2</mf-tree-item>
  <mf-tree-item>Item 3</mf-tree-item>
</mf-tree>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree>
    <MfTreeItem>
      Item 1
      <MfTreeItem>Item A</MfTreeItem>
      <MfTreeItem>Item B</MfTreeItem>
      <MfTreeItem>Item C</MfTreeItem>
    </MfTreeItem>
    <MfTreeItem>Item 2</MfTreeItem>
    <MfTreeItem>Item 3</MfTreeItem>
  </MfTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html:preview
<mf-tree>
  <mf-tree-item>
    Item 1
    <mf-tree-item>
      Item A
      <mf-tree-item>Item Z</mf-tree-item>
      <mf-tree-item>Item Y</mf-tree-item>
      <mf-tree-item>Item X</mf-tree-item>
    </mf-tree-item>
    <mf-tree-item>Item B</mf-tree-item>
    <mf-tree-item>Item C</mf-tree-item>
  </mf-tree-item>
  <mf-tree-item>Item 2</mf-tree-item>
  <mf-tree-item>Item 3</mf-tree-item>
</mf-tree>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree>
    <MfTreeItem>
      Item 1
      <MfTreeItem>
        Item A
        <MfTreeItem>Item Z</MfTreeItem>
        <MfTreeItem>Item Y</MfTreeItem>
        <MfTreeItem>Item X</MfTreeItem>
      </MfTreeItem>
      <MfTreeItem>Item B</MfTreeItem>
      <MfTreeItem>Item C</MfTreeItem>
    </MfTreeItem>
    <MfTreeItem>Item 2</MfTreeItem>
    <MfTreeItem>Item 3</MfTreeItem>
  </MfTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html:preview
<mf-tree>
  <mf-tree-item selected>
    Item 1
    <mf-tree-item>Item A</mf-tree-item>
    <mf-tree-item>Item B</mf-tree-item>
    <mf-tree-item>Item C</mf-tree-item>
  </mf-tree-item>
  <mf-tree-item>Item 2</mf-tree-item>
  <mf-tree-item>Item 3</mf-tree-item>
</mf-tree>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree>
    <MfTreeItem selected>
      Item 1
      <MfTreeItem>Item A</MfTreeItem>
      <MfTreeItem>Item B</MfTreeItem>
      <MfTreeItem>Item C</MfTreeItem>
    </MfTreeItem>
    <MfTreeItem>Item 2</MfTreeItem>
    <MfTreeItem>Item 3</MfTreeItem>
  </MfTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html:preview
<mf-tree>
  <mf-tree-item expanded>
    Item 1
    <mf-tree-item expanded>
      Item A
      <mf-tree-item>Item Z</mf-tree-item>
      <mf-tree-item>Item Y</mf-tree-item>
      <mf-tree-item>Item X</mf-tree-item>
    </mf-tree-item>
    <mf-tree-item>Item B</mf-tree-item>
    <mf-tree-item>Item C</mf-tree-item>
  </mf-tree-item>
  <mf-tree-item>Item 2</mf-tree-item>
  <mf-tree-item>Item 3</mf-tree-item>
</mf-tree>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree>
    <MfTreeItem expanded>
      Item 1
      <MfTreeItem expanded>
        Item A
        <MfTreeItem>Item Z</MfTreeItem>
        <MfTreeItem>Item Y</MfTreeItem>
        <MfTreeItem>Item X</MfTreeItem>
      </MfTreeItem>
      <MfTreeItem>Item B</MfTreeItem>
      <MfTreeItem>Item C</MfTreeItem>
    </MfTreeItem>
    <MfTreeItem>Item 2</MfTreeItem>
    <MfTreeItem>Item 3</MfTreeItem>
  </MfTree>
);
```
