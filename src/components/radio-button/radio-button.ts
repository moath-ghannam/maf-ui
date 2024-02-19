import MfRadioButton from './radio-button.component.js';

export * from './radio-button.component.js';
export default MfRadioButton;

MfRadioButton.define('mf-radio-button');

declare global {
  interface HTMLElementTagNameMap {
    'mf-radio-button': MfRadioButton;
  }
}
