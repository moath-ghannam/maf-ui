import MfIconButton from './icon-button.component.js';

export * from './icon-button.component.js';
export default MfIconButton;

MfIconButton.define('mf-icon-button');

declare global {
  interface HTMLElementTagNameMap {
    'mf-icon-button': MfIconButton;
  }
}
