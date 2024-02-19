import MfFormatBytes from './format-bytes.component.js';

export * from './format-bytes.component.js';
export default MfFormatBytes;

MfFormatBytes.define('mf-format-bytes');

declare global {
  interface HTMLElementTagNameMap {
    'mf-format-bytes': MfFormatBytes;
  }
}
