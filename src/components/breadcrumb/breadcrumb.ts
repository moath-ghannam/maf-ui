import MfBreadcrumb from './breadcrumb.component.js';

export * from './breadcrumb.component.js';
export default MfBreadcrumb;

MfBreadcrumb.define('mf-breadcrumb');

declare global {
  interface HTMLElementTagNameMap {
    'mf-breadcrumb': MfBreadcrumb;
  }
}
