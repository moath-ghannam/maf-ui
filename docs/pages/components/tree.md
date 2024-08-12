---
meta:
  title: Tree
  description: Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
layout: component
---

```html:preview
<mf-tree>
  <mf-tree-item>
    Deciduous
    <mf-tree-item>Birch</mf-tree-item>
    <mf-tree-item>
      Maple
      <mf-tree-item>Field maple</mf-tree-item>
      <mf-tree-item>Red maple</mf-tree-item>
      <mf-tree-item>Sugar maple</mf-tree-item>
    </mf-tree-item>
    <mf-tree-item>Oak</mf-tree-item>
  </mf-tree-item>

  <mf-tree-item>
    Coniferous
    <mf-tree-item>Cedar</mf-tree-item>
    <mf-tree-item>Pine</mf-tree-item>
    <mf-tree-item>Spruce</mf-tree-item>
  </mf-tree-item>

  <mf-tree-item>
    Non-trees
    <mf-tree-item>Bamboo</mf-tree-item>
    <mf-tree-item>Cactus</mf-tree-item>
    <mf-tree-item>Fern</mf-tree-item>
  </mf-tree-item>
</mf-tree>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree>
    <MfTreeItem>
      Deciduous
      <MfTreeItem>Birch</MfTreeItem>
      <MfTreeItem>
        Maple
        <MfTreeItem>Field maple</MfTreeItem>
        <MfTreeItem>Red maple</MfTreeItem>
        <MfTreeItem>Sugar maple</MfTreeItem>
      </MfTreeItem>
      <MfTreeItem>Oak</MfTreeItem>
    </MfTreeItem>

    <MfTreeItem>
      Coniferous
      <MfTreeItem>Cedar</MfTreeItem>
      <MfTreeItem>Pine</MfTreeItem>
      <MfTreeItem>Spruce</MfTreeItem>
    </MfTreeItem>

    <MfTreeItem>
      Non-trees
      <MfTreeItem>Bamboo</MfTreeItem>
      <MfTreeItem>Cactus</MfTreeItem>
      <MfTreeItem>Fern</MfTreeItem>
    </MfTreeItem>
  </MfTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html:preview
<mf-select id="selection-mode" value="single" label="Selection">
  <mf-option value="single">Single</mf-option>
  <mf-option value="multiple">Multiple</mf-option>
  <mf-option value="leaf">Leaf</mf-option>
</mf-select>

<br />

<mf-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('mf-change', () => {
    tree.querySelectorAll('mf-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <MfSelect label="Selection" value={selection} onMfChange={event => setSelection(event.target.value)}>
        <MfMenuItem value="single">single</MfMenuItem>
        <MfMenuItem value="multiple">multiple</MfMenuItem>
        <MfMenuItem value="leaf">leaf</MfMenuItem>
      </MfSelect>

      <br />

      <MfTree selection={selection}>
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
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html:preview
<mf-tree class="tree-with-lines">
  <mf-tree-item expanded>
    Deciduous
    <mf-tree-item>Birch</mf-tree-item>
    <mf-tree-item expanded>
      Maple
      <mf-tree-item>Field maple</mf-tree-item>
      <mf-tree-item>Red maple</mf-tree-item>
      <mf-tree-item>Sugar maple</mf-tree-item>
    </mf-tree-item>
    <mf-tree-item>Oak</mf-tree-item>
  </mf-tree-item>

  <mf-tree-item>
    Coniferous
    <mf-tree-item>Cedar</mf-tree-item>
    <mf-tree-item>Pine</mf-tree-item>
    <mf-tree-item>Spruce</mf-tree-item>
  </mf-tree-item>

  <mf-tree-item>
    Non-trees
    <mf-tree-item>Bamboo</mf-tree-item>
    <mf-tree-item>Cactus</mf-tree-item>
    <mf-tree-item>Fern</mf-tree-item>
  </mf-tree-item>
</mf-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

{% raw %}

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <MfTreeItem expanded>
      Deciduous
      <MfTreeItem>Birch</MfTreeItem>
      <MfTreeItem expanded>
        Maple
        <MfTreeItem>Field maple</MfTreeItem>
        <MfTreeItem>Red maple</MfTreeItem>
        <MfTreeItem>Sugar maple</MfTreeItem>
      </MfTreeItem>
      <MfTreeItem>Oak</MfTreeItem>
    </MfTreeItem>

    <MfTreeItem>
      Coniferous
      <MfTreeItem>Cedar</MfTreeItem>
      <MfTreeItem>Pine</MfTreeItem>
      <MfTreeItem>Spruce</MfTreeItem>
    </MfTreeItem>

    <MfTreeItem>
      Non-trees
      <MfTreeItem>Bamboo</MfTreeItem>
      <MfTreeItem>Cactus</MfTreeItem>
      <MfTreeItem>Fern</MfTreeItem>
    </MfTreeItem>
  </MfTree>
);
```

{% endraw %}

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `mf-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html:preview
<mf-tree>
  <mf-tree-item lazy>Available Trees</mf-tree-item>
</mf-tree>

<script type="module">
  const lazyItem = document.querySelector('mf-tree-item[lazy]');

  lazyItem.addEventListener('mf-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('mf-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <MfTree>
      <MfTreeItem lazy={lazy} onMfLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <MfTreeItem>{item}</MfTreeItem>
        ))}
      </MfTreeItem>
    </MfTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html:preview
<mf-tree class="custom-icons">
  <mf-icon name="plus-square" slot="expand-icon"></mf-icon>
  <mf-icon name="dash-square" slot="collapse-icon"></mf-icon>

  <mf-tree-item>
    Deciduous
    <mf-tree-item>Birch</mf-tree-item>
    <mf-tree-item>
      Maple
      <mf-tree-item>Field maple</mf-tree-item>
      <mf-tree-item>Red maple</mf-tree-item>
      <mf-tree-item>Sugar maple</mf-tree-item>
    </mf-tree-item>
    <mf-tree-item>Oak</mf-tree-item>
  </mf-tree-item>

  <mf-tree-item>
    Coniferous
    <mf-tree-item>Cedar</mf-tree-item>
    <mf-tree-item>Pine</mf-tree-item>
    <mf-tree-item>Spruce</mf-tree-item>
  </mf-tree-item>

  <mf-tree-item>
    Non-trees
    <mf-tree-item>Bamboo</mf-tree-item>
    <mf-tree-item>Cactus</mf-tree-item>
    <mf-tree-item>Fern</mf-tree-item>
  </mf-tree-item>
</mf-tree>

<style>
  .custom-icons mf-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx:react
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => (
  <MfTree>
    <MfIcon name="plus-square" slot="expand-icon"></MfIcon>
    <MfIcon name="dash-square" slot="collapse-icon"></MfIcon>

    <MfTreeItem>
      Deciduous
      <MfTreeItem>Birch</MfTreeItem>
      <MfTreeItem>
        Maple
        <MfTreeItem>Field maple</MfTreeItem>
        <MfTreeItem>Red maple</MfTreeItem>
        <MfTreeItem>Sugar maple</MfTreeItem>
      </MfTreeItem>
      <MfTreeItem>Oak</MfTreeItem>
    </MfTreeItem>

    <MfTreeItem>
      Coniferous
      <MfTreeItem>Cedar</MfTreeItem>
      <MfTreeItem>Pine</MfTreeItem>
      <MfTreeItem>Spruce</MfTreeItem>
    </MfTreeItem>

    <MfTreeItem>
      Non-trees
      <MfTreeItem>Bamboo</MfTreeItem>
      <MfTreeItem>Cactus</MfTreeItem>
      <MfTreeItem>Fern</MfTreeItem>
    </MfTreeItem>
  </MfTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html:preview
<mf-tree class="tree-with-icons">
  <mf-tree-item expanded>
    <mf-icon name="folder"></mf-icon>
    Documents

    <mf-tree-item>
      <mf-icon name="folder"> </mf-icon>
      Photos
      <mf-tree-item>
        <mf-icon name="image"></mf-icon>
        birds.jpg
      </mf-tree-item>
      <mf-tree-item>
        <mf-icon name="image"></mf-icon>
        kitten.jpg
      </mf-tree-item>
      <mf-tree-item>
        <mf-icon name="image"></mf-icon>
        puppy.jpg
      </mf-tree-item>
    </mf-tree-item>

    <mf-tree-item>
      <mf-icon name="folder"></mf-icon>
      Writing
      <mf-tree-item>
        <mf-icon name="file"></mf-icon>
        draft.txt
      </mf-tree-item>
      <mf-tree-item>
        <mf-icon name="file-pdf"></mf-icon>
        final.pdf
      </mf-tree-item>
      <mf-tree-item>
        <mf-icon name="file-bar-graph"></mf-icon>
        sales.xls
      </mf-tree-item>
    </mf-tree-item>
  </mf-tree-item>
</mf-tree>
```

```jsx:react
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfTree from 'maf-ui-kit/dist/react/tree';
import MfTreeItem from 'maf-ui-kit/dist/react/tree-item';

const App = () => {
  return (
    <MfTree class="tree-with-icons">
      <MfTreeItem expanded>
        <MfIcon name="folder" />
        Root
        <MfTreeItem>
          <MfIcon name="folder" />
          Folder 1<MfTreeItem>
            <MfIcon name="files" />
            File 1 - 1
          </MfTreeItem>
          <MfTreeItem disabled>
            <MfIcon name="files" />
            File 1 - 2
          </MfTreeItem>
          <MfTreeItem>
            <MfIcon name="files" />
            File 1 - 3
          </MfTreeItem>
        </MfTreeItem>
        <MfTreeItem>
          <MfIcon name="files" />
          Folder 2<MfTreeItem>
            <MfIcon name="files" />
            File 2 - 1
          </MfTreeItem>
          <MfTreeItem>
            <MfIcon name="files" />
            File 2 - 2
          </MfTreeItem>
        </MfTreeItem>
        <MfTreeItem>
          <MfIcon name="files" />
          File 1
        </MfTreeItem>
      </MfTreeItem>
    </MfTree>
  );
};
```
