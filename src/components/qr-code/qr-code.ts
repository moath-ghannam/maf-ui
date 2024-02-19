import MfQrCode from './qr-code.component.js';

export * from './qr-code.component.js';
export default MfQrCode;

MfQrCode.define('mf-qr-code');

declare global {
  interface HTMLElementTagNameMap {
    'mf-qr-code': MfQrCode;
  }
}
