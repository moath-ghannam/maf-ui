---
meta:
  title: Carousel Item
  description: A carousel item represent a slide within a carousel.
layout: component
---

```html:preview
<mf-carousel pagination>
  <mf-carousel-item>
    <img
      alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
      src="/assets/examples/carousel/field.jpg"
    />
  </mf-carousel-item>
  <mf-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
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
        alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
        src="/assets/examples/carousel/field.jpg"
      />
    </MfCarouselItem>
    <MfCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
        src="/assets/examples/carousel/valley.jpg"
      />
    </MfCarouselItem>
  </MfCarousel>
);
```

:::tip
Additional demonstrations can be found in the [carousel examples](/components/carousel).
:::
