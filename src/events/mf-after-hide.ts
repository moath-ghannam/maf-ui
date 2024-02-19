export type MfAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-after-hide': MfAfterHideEvent;
  }
}
