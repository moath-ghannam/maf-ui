export type MfRequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-request-close': MfRequestCloseEvent;
  }
}
