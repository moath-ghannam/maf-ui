import MfAnimation from './animation.component.js';

export * from './animation.component.js';
export default MfAnimation;

MfAnimation.define('mf-animation');

declare global {
  interface HTMLElementTagNameMap {
    'mf-animation': MfAnimation;
  }
}
