import MfMenuLabel from './menu-label.component.js';

export * from './menu-label.component.js';
export default MfMenuLabel;

MfMenuLabel.define('mf-menu-label');

declare global {
  interface HTMLElementTagNameMap {
    'mf-menu-label': MfMenuLabel;
  }
}
