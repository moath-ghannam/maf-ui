import MfAnimatedImage from './animated-image.component.js';

export * from './animated-image.component.js';
export default MfAnimatedImage;

MfAnimatedImage.define('mf-animated-image');

declare global {
  interface HTMLElementTagNameMap {
    'mf-animated-image': MfAnimatedImage;
  }
}
