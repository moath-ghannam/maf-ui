export type MfErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-error': MfErrorEvent;
  }
}
