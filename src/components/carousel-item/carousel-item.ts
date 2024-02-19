import MfCarouselItem from './carousel-item.component.js';

export * from './carousel-item.component.js';
export default MfCarouselItem;

MfCarouselItem.define('mf-carousel-item');

declare global {
  interface HTMLElementTagNameMap {
    'mf-carousel-item': MfCarouselItem;
  }
}
