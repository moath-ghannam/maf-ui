import MfImageComparer from './image-comparer.component.js';

export * from './image-comparer.component.js';
export default MfImageComparer;

MfImageComparer.define('mf-image-comparer');

declare global {
  interface HTMLElementTagNameMap {
    'mf-image-comparer': MfImageComparer;
  }
}
