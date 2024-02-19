import MfRating from './rating.component.js';

export * from './rating.component.js';
export default MfRating;

MfRating.define('mf-rating');

declare global {
  interface HTMLElementTagNameMap {
    'mf-rating': MfRating;
  }
}
