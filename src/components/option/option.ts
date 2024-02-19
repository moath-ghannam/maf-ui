import MfOption from './option.component.js';

export * from './option.component.js';
export default MfOption;

MfOption.define('mf-option');

declare global {
  interface HTMLElementTagNameMap {
    'mf-option': MfOption;
  }
}
