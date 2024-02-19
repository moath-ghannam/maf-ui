export type MfBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-blur': MfBlurEvent;
  }
}
