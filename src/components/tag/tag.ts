import MfTag from './tag.component.js';

export * from './tag.component.js';
export default MfTag;

MfTag.define('mf-tag');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tag': MfTag;
  }
}
