import MfDialog from './dialog.component.js';

export * from './dialog.component.js';
export default MfDialog;

MfDialog.define('mf-dialog');

declare global {
  interface HTMLElementTagNameMap {
    'mf-dialog': MfDialog;
  }
}
