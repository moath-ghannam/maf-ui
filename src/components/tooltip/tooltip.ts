import MfTooltip from './tooltip.component.js';

export * from './tooltip.component.js';
export default MfTooltip;

MfTooltip.define('mf-tooltip');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tooltip': MfTooltip;
  }
}
