import MfFormatDate from './format-date.component.js';

export * from './format-date.component.js';
export default MfFormatDate;

MfFormatDate.define('mf-format-date');

declare global {
  interface HTMLElementTagNameMap {
    'mf-format-date': MfFormatDate;
  }
}
