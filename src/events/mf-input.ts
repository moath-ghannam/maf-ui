export type MfInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-input': MfInputEvent;
  }
}
