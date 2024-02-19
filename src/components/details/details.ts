import MfDetails from './details.component.js';

export * from './details.component.js';
export default MfDetails;

MfDetails.define('mf-details');

declare global {
  interface HTMLElementTagNameMap {
    'mf-details': MfDetails;
  }
}
