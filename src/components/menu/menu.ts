import MfMenu from './menu.component.js';

export * from './menu.component.js';
export default MfMenu;

MfMenu.define('mf-menu');

declare global {
  interface HTMLElementTagNameMap {
    'mf-menu': MfMenu;
  }
}
