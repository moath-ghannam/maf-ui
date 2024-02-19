export type MfRepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-reposition': MfRepositionEvent;
  }
}
