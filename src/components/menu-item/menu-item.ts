import MfMenuItem from './menu-item.component.js';

export * from './menu-item.component.js';
export default MfMenuItem;

MfMenuItem.define('mf-menu-item');

declare global {
  interface HTMLElementTagNameMap {
    'mf-menu-item': MfMenuItem;
  }
}
