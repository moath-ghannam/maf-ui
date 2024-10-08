---
meta:
  title: Skeleton
  description: Skeletons are used to provide a visual representation of where content will eventually be drawn.
layout: component
---

These are simple containers for scaffolding layouts that mimic what users will see when content has finished loading. This prevents large areas of empty space during asynchronous operations.

Skeletons try not to be opinionated, as there are endless possibilities for designing layouts. Therefore, you'll likely use more than one skeleton to create the effect you want. If you find yourself using them frequently, consider creating a template that renders them with the desired arrangement and styles.

```html:preview
<div class="skeleton-overview">
  <header>
    <mf-skeleton></mf-skeleton>
    <mf-skeleton></mf-skeleton>
  </header>

  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
</div>

<style>
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header mf-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview mf-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview mf-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview mf-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview mf-skeleton:nth-child(4) {
    width: 80%;
  }
</style>
```

```jsx:react
import MfSkeleton from 'maf-ui-kit/dist/react/skeleton';

const css = `
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header mf-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview mf-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview mf-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview mf-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview mf-skeleton:nth-child(4) {
    width: 80%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-overview">
      <header>
        <MfSkeleton />
        <MfSkeleton />
      </header>

      <MfSkeleton />
      <MfSkeleton />
      <MfSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

## Examples

### Effects

There are two built-in effects, `sheen` and `pulse`. Effects are intentionally subtle, as they can be distracting when used extensively. The default is `none`, which displays a static, non-animated skeleton.

```html:preview
<div class="skeleton-effects">
  <mf-skeleton effect="none"></mf-skeleton>
  None

  <mf-skeleton effect="sheen"></mf-skeleton>
  Sheen

  <mf-skeleton effect="pulse"></mf-skeleton>
  Pulse
</div>

<style>
  .skeleton-effects {
    font-size: var(--mf-font-size-small);
  }

  .skeleton-effects mf-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
</style>
```

```jsx:react
import MfSkeleton from 'maf-ui-kit/dist/react/skeleton';

const css = `
  .skeleton-effects {
    font-size: var(--mf-font-size-small);
  }

  .skeleton-effects mf-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-effects">
      <MfSkeleton effect="none" />
      None
      <MfSkeleton effect="sheen" />
      Sheen
      <MfSkeleton effect="pulse" />
      Pulse
    </div>

    <style>{css}</style>
  </>
);
```

### Paragraphs

Use multiple skeletons and some clever styles to simulate paragraphs.

```html:preview
<div class="skeleton-paragraphs">
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
</div>

<style>
  .skeleton-paragraphs mf-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-paragraphs mf-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs mf-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs mf-skeleton:last-child {
    width: 50%;
  }
</style>
```

```jsx:react
import MfSkeleton from 'maf-ui-kit/dist/react/skeleton';

const css = `
  .skeleton-paragraphs mf-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-paragraphs mf-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs mf-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs mf-skeleton:last-child {
    width: 50%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-paragraphs">
      <MfSkeleton />
      <MfSkeleton />
      <MfSkeleton />
      <MfSkeleton />
      <MfSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Avatars

Set a matching width and height to make a circle, square, or rounded avatar skeleton.

```html:preview
<div class="skeleton-avatars">
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
  <mf-skeleton></mf-skeleton>
</div>

<style>
  .skeleton-avatars mf-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .skeleton-avatars mf-skeleton:nth-child(1) {
    --border-radius: 0;
  }

  .skeleton-avatars mf-skeleton:nth-child(2) {
    --border-radius: var(--mf-border-radius-medium);
  }
</style>
```

```jsx:react
import MfSkeleton from 'maf-ui-kit/dist/react/skeleton';

const css = `
  .skeleton-avatars mf-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
  }

  .skeleton-avatars mf-skeleton:nth-child(1) {
    --border-radius: 0;
  }

  .skeleton-avatars mf-skeleton:nth-child(2) {
    --border-radius: var(--mf-border-radius-medium);
  }
`;

const App = () => (
  <>
    <div className="skeleton-avatars">
      <MfSkeleton />
      <MfSkeleton />
      <MfSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Custom Shapes

Use the `--border-radius` custom property to make circles, squares, and rectangles. For more complex shapes, you can apply `clip-path` to the `indicator` part. [Try Clippy](https://bennettfeely.com/clippy/) if you need help generating custom shapes.

```html:preview
<div class="skeleton-shapes">
  <mf-skeleton class="square"></mf-skeleton>
  <mf-skeleton class="circle"></mf-skeleton>
  <mf-skeleton class="triangle"></mf-skeleton>
  <mf-skeleton class="cross"></mf-skeleton>
  <mf-skeleton class="comment"></mf-skeleton>
</div>

<style>
  .skeleton-shapes mf-skeleton {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }

  .skeleton-shapes .square::part(indicator) {
    --border-radius: var(--mf-border-radius-medium);
  }

  .skeleton-shapes .circle::part(indicator) {
    --border-radius: var(--mf-border-radius-circle);
  }

  .skeleton-shapes .triangle::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  .skeleton-shapes .comment::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }

  .skeleton-shapes mf-skeleton:not(:last-child) {
    margin-right: 0.5rem;
  }
</style>
```

```jsx:react
import MfSkeleton from 'maf-ui-kit/dist/react/skeleton';

const css = `
  .skeleton-shapes mf-skeleton {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }

  .skeleton-shapes .square::part(indicator) {
    --border-radius: var(--mf-border-radius-medium);
  }

  .skeleton-shapes .circle::part(indicator) {
    --border-radius: var(--mf-border-radius-circle);
  }

  .skeleton-shapes .triangle::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }

  .skeleton-shapes .comment::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }

  .skeleton-shapes mf-skeleton:not(:last-child) {
    margin-right: .5rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-shapes">
      <MfSkeleton className="square" />
      <MfSkeleton className="circle" />
      <MfSkeleton className="triangle" />
      <MfSkeleton className="cross" />
      <MfSkeleton className="comment" />
    </div>

    <style>{css}</style>
  </>
);
```

### Custom Colors

Set the `--color` and `--sheen-color` custom properties to adjust the skeleton's color.

```html:preview
<mf-skeleton effect="sheen" style="--color: tomato; --sheen-color: #ffb094;"></mf-skeleton>
```

{% raw %}

```jsx:react
import MfSkeleton from 'maf-ui-kit/dist/react/skeleton';

const css = `
  .skeleton-avatars mf-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
  }

  .skeleton-avatars mf-skeleton:nth-child(1) {
    --border-radius: 0;
  }

  .skeleton-avatars mf-skeleton:nth-child(2) {
    --border-radius: var(--mf-border-radius-medium);
  }
`;

const App = () => <MfSkeleton effect="sheen" style={{ '--color': 'tomato', '--sheen-color': '#ffb094' }} />;
```

{% endraw %}
