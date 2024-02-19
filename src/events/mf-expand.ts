export type MfExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-expand': MfExpandEvent;
  }
}
