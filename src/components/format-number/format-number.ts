import MfFormatNumber from './format-number.component.js';

export * from './format-number.component.js';
export default MfFormatNumber;

MfFormatNumber.define('mf-format-number');

declare global {
  interface HTMLElementTagNameMap {
    'mf-format-number': MfFormatNumber;
  }
}
