import MfRadio from './radio.component.js';

export * from './radio.component.js';
export default MfRadio;

MfRadio.define('mf-radio');

declare global {
  interface HTMLElementTagNameMap {
    'mf-radio': MfRadio;
  }
}
