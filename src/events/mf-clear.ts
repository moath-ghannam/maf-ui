export type MfClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-clear': MfClearEvent;
  }
}
