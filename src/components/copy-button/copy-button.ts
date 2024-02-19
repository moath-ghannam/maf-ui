import MfCopyButton from './copy-button.component.js';

export * from './copy-button.component.js';
export default MfCopyButton;

MfCopyButton.define('mf-copy-button');

declare global {
  interface HTMLElementTagNameMap {
    'mf-copy-button': MfCopyButton;
  }
}
