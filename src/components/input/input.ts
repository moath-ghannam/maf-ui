import MfInput from './input.component.js';

export * from './input.component.js';
export default MfInput;

MfInput.define('mf-input');

declare global {
  interface HTMLElementTagNameMap {
    'mf-input': MfInput;
  }
}
