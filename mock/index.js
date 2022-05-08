import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { router } from './router';
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers, ...router);
