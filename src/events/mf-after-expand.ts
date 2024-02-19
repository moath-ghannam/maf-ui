export type MfAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-after-expand': MfAfterExpandEvent;
  }
}
