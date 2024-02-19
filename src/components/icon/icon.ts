import MfIcon from './icon.component.js';

export * from './icon.component.js';
export default MfIcon;

MfIcon.define('mf-icon');

declare global {
  interface HTMLElementTagNameMap {
    'mf-icon': MfIcon;
  }
}
