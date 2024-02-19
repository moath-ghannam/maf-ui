export type MfAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-after-show': MfAfterShowEvent;
  }
}
