import MfDrawer from './drawer.component.js';

export * from './drawer.component.js';
export default MfDrawer;

MfDrawer.define('mf-drawer');

declare global {
  interface HTMLElementTagNameMap {
    'mf-drawer': MfDrawer;
  }
}
