import MfAvatar from './avatar.component.js';

export * from './avatar.component.js';
export default MfAvatar;

MfAvatar.define('mf-avatar');

declare global {
  interface HTMLElementTagNameMap {
    'mf-avatar': MfAvatar;
  }
}
