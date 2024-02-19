export type MfHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-hide': MfHideEvent;
  }
}
