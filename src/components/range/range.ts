import MfRange from './range.component.js';

export * from './range.component.js';
export default MfRange;

MfRange.define('mf-range');

declare global {
  interface HTMLElementTagNameMap {
    'mf-range': MfRange;
  }
}
