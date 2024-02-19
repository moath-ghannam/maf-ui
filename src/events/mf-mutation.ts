export type MfMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-mutation': MfMutationEvent;
  }
}
