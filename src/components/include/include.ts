import MfInclude from './include.component.js';

export * from './include.component.js';
export default MfInclude;

MfInclude.define('mf-include');

declare global {
  interface HTMLElementTagNameMap {
    'mf-include': MfInclude;
  }
}
