import MfCarousel from './carousel.component.js';

export * from './carousel.component.js';
export default MfCarousel;

MfCarousel.define('mf-carousel');

declare global {
  interface HTMLElementTagNameMap {
    'mf-carousel': MfCarousel;
  }
}
