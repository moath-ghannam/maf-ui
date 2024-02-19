export type MfFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-focus': MfFocusEvent;
  }
}
