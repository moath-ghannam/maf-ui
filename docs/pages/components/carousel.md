---
meta:
  title: Carousel
  description: Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
layout: component
---

```html:preview
<mf-carousel pagination navigation mouse-dragging loop>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
```

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const App = () => (
  <>
    <MfCarousel pagination mouse-dragging>
      <MfCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </MfCarouselItem>
    </MfCarousel>
  </>
);
```

## Examples

### Pagination

Use the `pagination` attribute to show the total number of slides and the current slide as a set of interactive dots.

```html:preview
<mf-carousel pagination>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
```

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const App = () => (
  <MfCarousel pagination>
    <MfCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </MfCarouselItem>
  </MfCarousel>
);
```

### Navigation

Use the `navigation` attribute to show previous and next buttons.

```html:preview
<mf-carousel navigation>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
```

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const App = () => (
  <MfCarousel navigation>
    <MfCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </MfCarouselItem>
  </MfCarousel>
);
```

### Looping

By default, the carousel will not advanced beyond the first and last slides. You can change this behavior and force the carousel to "wrap" with the `loop` attribute.

```html:preview
<mf-carousel loop navigation pagination>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
```

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const App = () => (
  <MfCarousel loop navigation pagination>
    <MfCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </MfCarouselItem>
  </MfCarousel>
);
```

### Autoplay

The carousel will automatically advance when the `autoplay` attribute is used. To change how long a slide is shown before advancing, set `autoplay-interval` to the desired number of milliseconds. For best results, use the `loop` attribute when autoplay is enabled. Note that autoplay will pause while the user interacts with the carousel.

```html:preview
<mf-carousel autoplay loop pagination>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
```

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const App = () => (
  <MfCarousel autoplay loop pagination>
    <MfCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </MfCarouselItem>
  </MfCarousel>
);
```

### Mouse Dragging

The carousel uses [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) to position slides at various snap positions. This allows users to scroll through the slides very naturally, especially on touch devices. Unfortunately, desktop users won't be able to click and drag with a mouse, which can feel unnatural. Adding the `mouse-dragging` attribute can help with this.

This example is best demonstrated using a mouse. Try clicking and dragging the slide to move it. Then toggle the switch and try again.

```html:preview
<div class="mouse-dragging">
  <mf-carousel pagination>
    <mf-carousel-item>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </mf-carousel-item>
    <mf-carousel-item>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </mf-carousel-item>
    <mf-carousel-item>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </mf-carousel-item>
    <mf-carousel-item>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </mf-carousel-item>
    <mf-carousel-item>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </mf-carousel-item>
  </mf-carousel>

  <mf-divider></mf-divider>

  <mf-switch>Enable mouse dragging</mf-switch>
</div>

<script>
  const container = document.querySelector('.mouse-dragging');
  const carousel = container.querySelector('mf-carousel');
  const toggle = container.querySelector('mf-switch');

  toggle.addEventListener('mf-change', () => {
    carousel.toggleAttribute('mouse-dragging', toggle.checked);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfSwitch from 'maf-ui-kit/dist/react/switch';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <MfCarousel navigation mouseDragging={isEnabled}>
        <MfCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </MfCarouselItem>
      </MfCarousel>

      <MfDivider></MfDivider>

      <MfSwitch checked={isEnabled} onMfInput={() => setIsEnabled(!isEnabled)}>
        Enable mouse dragging
      </MfSwitch>
    </>
  );
};
```

### Multiple Mfides Per View

The `slides-per-page` attribute makes it possible to display multiple slides at a time. You can also use the `slides-per-move` attribute to advance more than once slide at a time, if desired.

```html:preview
<mf-carousel navigation pagination slides-per-page="2" slides-per-move="2">
  <mf-carousel-item style="background: var(--mf-color-red-200);">Mfide 1</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-orange-200);">Mfide 2</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-yellow-200);">Mfide 3</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-green-200);">Mfide 4</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-blue-200);">Mfide 5</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-violet-200);">Mfide 6</mf-carousel-item>
</mf-carousel>
```

{% raw %}

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const App = () => (
  <MfCarousel navigation pagination slidesPerPage={2} slidesPerMove={2}>
    <MfCarouselItem style={{ background: 'var(--mf-color-red-200)' }}>Mfide 1</MfCarouselItem>
    <MfCarouselItem style={{ background: 'var(--mf-color-orange-200)' }}>Mfide 2</MfCarouselItem>
    <MfCarouselItem style={{ background: 'var(--mf-color-yellow-200)' }}>Mfide 3</MfCarouselItem>
    <MfCarouselItem style={{ background: 'var(--mf-color-green-200)' }}>Mfide 4</MfCarouselItem>
    <MfCarouselItem style={{ background: 'var(--mf-color-blue-200)' }}>Mfide 5</MfCarouselItem>
    <MfCarouselItem style={{ background: 'var(--mf-color-violet-200)' }}>Mfide 6</MfCarouselItem>
  </MfCarousel>
);
```

{% endraw %}

### Adding and Removing Mfides

The content of the carousel can be changed by adding or removing carousel items. The carousel will update itself automatically.

```html:preview
<mf-carousel class="dynamic-carousel" pagination navigation>
  <mf-carousel-item style="background: var(--mf-color-red-200)">Mfide 1</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-orange-200)">Mfide 2</mf-carousel-item>
  <mf-carousel-item style="background: var(--mf-color-yellow-200)">Mfide 3</mf-carousel-item>
</mf-carousel>

<div class="carousel-options">
  <mf-button id="dynamic-add">Add slide</mf-button>
  <mf-button id="dynamic-remove">Remove slide</mf-button>
</div>

<style>
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    gap: var(--mf-spacing-x-small);
    margin-top: var(--mf-spacing-large);
  }

  .dynamic-carousel mf-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--mf-font-size-2x-large);
  }
</style>

<script>
  (() => {
    const dynamicCarousel = document.querySelector('.dynamic-carousel');
    const dynamicAdd = document.querySelector('#dynamic-add');
    const dynamicRemove = document.querySelector('#dynamic-remove');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    let colorIndex = 2;

    const addMfide = () => {
      const slide = document.createElement('mf-carousel-item');
      const color = colors[++colorIndex % colors.length];
      slide.innerText = `Mfide ${dynamicCarousel.children.length + 1}`;
      slide.style.setProperty('background', `var(--mf-color-${color}-200)`);
      dynamicCarousel.appendChild(slide);
      dynamicRemove.disabled = false;
    };

    const removeMfide = () => {
      const slide = dynamicCarousel.children[dynamicCarousel.children.length - 1];
      const numMfides = dynamicCarousel.querySelectorAll('mf-carousel-item').length;

      if (numMfides > 1) {
        slide.remove();
        colorIndex--;
      }

      dynamicRemove.disabled = numMfides - 1 <= 1;
    };

    dynamicAdd.addEventListener('click', addMfide);
    dynamicRemove.addEventListener('click', removeMfide);
  })();
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const css = `
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    margin-top: var(--mf-spacing-large);
  }

  .dynamic-carousel mf-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--mf-font-size-2x-large);
  }
`;

const App = () => {
  const [slides, setMfides] = useState(['#204ed8', '#be133d', '#6e28d9']);
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

  const addMfide = () => {
    setMfides([...slides, getRandomColor()]);
  };

  const removeMfide = () => {
    setMfides(slides.slice(0, -1));
  };

  return (
    <>
      <MfCarousel className="dynamic-carousel" pagination navigation>
        {slides.map((color, i) => (
          <MfCarouselItem style={{ background: colors[i % colors.length }}>
            Mfide {i}
          </MfCarouselItem>
        ))}
      </MfCarousel>

      <div className="carousel-options">
        <MfButton onClick={addMfide}>Add slide</MfButton>
        <MfButton onClick={removeMfide}>Remove slide</MfButton>
      </div>

      <style>{css}</style>
    </>
  );
};
```

{% endraw %}

### Vertical Scrolling

Setting the `orientation` attribute to `vertical` will render the carousel in a vertical layout. If the content of your slides vary in height, you will need to set amn explicit `height` or `max-height` on the carousel using CSS.

```html:preview
<mf-carousel class="vertical" pagination orientation="vertical">
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
<style>
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
</style>
```

```jsx:react
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';

const css = `
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
`;

const App = () => (
  <>
    <MfCarousel className="vertical" loop pagination orientation="vertical">
      <MfCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </MfCarouselItem>
    </MfCarousel>
    <style>{css}</style>
  </>
);
```

### Aspect Ratio

Use the `--aspect-ratio` custom property to customize the size of the carousel's viewport from the default value of 16/9.

```html:preview
<mf-carousel class="aspect-ratio" navigation pagination style="--aspect-ratio: 3/2;">
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>

<mf-divider></mf-divider>

<mf-select label="Aspect ratio" name="aspect" value="3/2">
  <mf-option value="1/1">1/1</mf-option>
  <mf-option value="3/2">3/2</mf-option>
  <mf-option value="16/9">16/9</mf-option>
</mf-select>

<script>
  (() => {
    const carousel = document.querySelector('mf-carousel.aspect-ratio');
    const aspectRatio = document.querySelector('mf-select[name="aspect"]');

    aspectRatio.addEventListener('mf-change', () => {
      carousel.style.setProperty('--aspect-ratio', aspectRatio.value);
    });
  })();
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfSelect from 'maf-ui-kit/dist/react/select';
import MfOption from 'maf-ui-kit/dist/react/option';

const App = () => {
  const [aspectRatio, setAspectRatio] = useState('3/2');

  return (
    <>
      <MfCarousel className="aspect-ratio" navigation pagination style={{ '--aspect-ratio': aspectRatio }}>
        <MfCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </MfCarouselItem>
        <MfCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </MfCarouselItem>
      </MfCarousel>

      <MfDivider />

      <MfSelect
        label="Aspect ratio"
        name="aspect"
        value={aspectRatio}
        onMfChange={event => setAspectRatio(event.target.value)}
      >
        <MfOption value="1 / 1">1 / 1</MfOption>
        <MfOption value="3 / 2">3 / 2</MfOption>
        <MfOption value="16 / 9">16 / 9</MfOption>
      </MfSelect>

      <style>{css}</style>
    </>
  );
};
```

{% endraw %}

### Scroll Hint

Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.

```html:preview
<mf-carousel class="scroll-hint" pagination style="--scroll-hint: 10%;">
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfRange from 'maf-ui-kit/dist/react/range';

const App = () => (
  <>
    <MfCarousel className="scroll-hint" pagination style={{ '--scroll-hint': '10%' }}>
      <MfCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </MfCarouselItem>
      <MfCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </MfCarouselItem>
    </MfCarousel>
  </>
);
```

{% endraw %}

### Gallery Example

The carousel has a robust API that makes it possible to extend and customize. This example syncs the active slide with a set of thumbnails, effectively creating a gallery-style carousel.

```html:preview
<mf-carousel class="carousel-thumbnails" navigation loop>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </mf-carousel-item>
</mf-carousel>

<div class="thumbnails">
  <div class="thumbnails__scroller">
    <img alt="Thumbnail by 1" class="thumbnails__image active" src="/assets/examples/carousel/mountains.jpg" />
    <img alt="Thumbnail by 2" class="thumbnails__image" src="/assets/examples/carousel/waterfall.jpg" />
    <img alt="Thumbnail by 3" class="thumbnails__image" src="/assets/examples/carousel/sunset.jpg" />
    <img alt="Thumbnail by 4" class="thumbnails__image" src="/assets/examples/carousel/field.jpg" />
    <img alt="Thumbnail by 5" class="thumbnails__image" src="/assets/examples/carousel/valley.jpg" />
  </div>
</div>

<style>
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--mf-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--mf-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
</style>

<script>
  {
    const carousel = document.querySelector('.carousel-thumbnails');
    const scroller = document.querySelector('.thumbnails__scroller');
    const thumbnails = document.querySelectorAll('.thumbnails__image');

    scroller.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('.thumbnails__image')) {
        const index = [...thumbnails].indexOf(target);
        carousel.goToMfide(index);
      }
    });

    carousel.addEventListener('mf-slide-change', e => {
      const slideIndex = e.detail.index;

      [...thumbnails].forEach((thumb, i) => {
        thumb.classList.toggle('active', i === slideIndex);
        if (i === slideIndex) {
          thumb.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    });
  }
</script>
```

```jsx:react
import { useRef } from 'react';
import MfCarousel from 'maf-ui-kit/dist/react/carousel';
import MfCarouselItem from 'maf-ui-kit/dist/react/carousel-item';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfRange from 'maf-ui-kit/dist/react/range';

const css = `
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--mf-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--mf-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
`;

const images = [
  {
    src: '/assets/examples/carousel/mountains.jpg',
    alt: 'The sun shines on the mountains and trees (by Adam Kool on Unsplash'
  },
  {
    src: '/assets/examples/carousel/waterfall.jpg',
    alt: 'A waterfall in the middle of a forest (by Thomas Kelly on Unsplash'
  },
  {
    src: '/assets/examples/carousel/sunset.jpg',
    alt: 'The sun is setting over a lavender field (by Leonard Cotte on Unsplash'
  },
  {
    src: '/assets/examples/carousel/field.jpg',
    alt: 'A field of grass with the sun setting in the background (by Sapan Patel on Unsplash'
  },
  {
    src: '/assets/examples/carousel/valley.jpg',
    alt: 'A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash'
  }
];

const App = () => {
  const carouselRef = useRef();
  const thumbnailsRef = useRef();
  const [currentMfide, setCurrentMfide] = useState(0);

  useEffect(() => {
    const thumbnails = Array.from(thumbnailsRef.current.querySelectorAll('.thumbnails__image'));

    thumbnails[currentMfide]..scrollIntoView({
      block: 'nearest'
    });
  }, [currentMfide]);

  const handleThumbnailClick = (index) => {
    carouselRef.current.goToMfide(index);
  }

  const handleMfideChange = (event) => {
    const slideIndex = e.detail.index;
    setCurrentMfide(slideIndex);
  }

  return (
    <>
      <MfCarousel className="carousel-thumbnails" navigation loop onMfMfideChange={handleMfideChange}>
        {images.map({ src, alt }) => (
          <MfCarouselItem>
            <img
              alt={alt}
              src={src}
            />
          </MfCarouselItem>
        )}
      </MfCarousel>

      <div class="thumbnails">
        <div class="thumbnails__scroller">
          {images.map({ src, alt }, i) => (
            <img
              alt={`Thumbnail by ${i + 1}`}
              className={`thumbnails__image ${i === currentMfide ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(i)}
              src={src}
            />
          )}
        </div>
      </div>
      <style>{css}</style>
    </>
  );
};
```
