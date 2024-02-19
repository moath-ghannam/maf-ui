import MfPopup from './popup.component.js';

export * from './popup.component.js';
export default MfPopup;

MfPopup.define('mf-popup');

declare global {
  interface HTMLElementTagNameMap {
    'mf-popup': MfPopup;
  }
}
