import MfBadge from './badge.component.js';

export * from './badge.component.js';
export default MfBadge;

MfBadge.define('mf-badge');

declare global {
  interface HTMLElementTagNameMap {
    'mf-badge': MfBadge;
  }
}
