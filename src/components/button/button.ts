import MfButton from './button.component.js';

export * from './button.component.js';
export default MfButton;

MfButton.define('mf-button');

declare global {
  interface HTMLElementTagNameMap {
    'mf-button': MfButton;
  }
}
