import MfVisuallyHidden from './visually-hidden.component.js';

export * from './visually-hidden.component.js';
export default MfVisuallyHidden;

MfVisuallyHidden.define('mf-visually-hidden');

declare global {
  interface HTMLElementTagNameMap {
    'mf-visually-hidden': MfVisuallyHidden;
  }
}
