import type MfCarouselItem from '../components/carousel-item/carousel-item.js';

export type MfSlideChangeEvent = CustomEvent<{ index: number; slide: MfCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-slide-change': MfSlideChangeEvent;
  }
}
