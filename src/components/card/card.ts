import MfCard from './card.component.js';

export * from './card.component.js';
export default MfCard;

MfCard.define('mf-card');

declare global {
  interface HTMLElementTagNameMap {
    'mf-card': MfCard;
  }
}
