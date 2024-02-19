import MfTextarea from './textarea.component.js';

export * from './textarea.component.js';
export default MfTextarea;

MfTextarea.define('mf-textarea');

declare global {
  interface HTMLElementTagNameMap {
    'mf-textarea': MfTextarea;
  }
}
