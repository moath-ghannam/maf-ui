import MfBreadcrumbItem from './breadcrumb-item.component.js';

export * from './breadcrumb-item.component.js';
export default MfBreadcrumbItem;

MfBreadcrumbItem.define('mf-breadcrumb-item');

declare global {
  interface HTMLElementTagNameMap {
    'mf-breadcrumb-item': MfBreadcrumbItem;
  }
}
