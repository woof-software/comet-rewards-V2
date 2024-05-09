export const errors = {
  handlerRegistered: () =>
    new Error('Handler for task queue already registered'),
  genericHandlerMessage: (msgId: number) =>
    new Error(`Message ${msgId} consumed by generic class handler`),
  genericMethod: () =>
    new Error('Generic class method called. Use task implementation'),
};
