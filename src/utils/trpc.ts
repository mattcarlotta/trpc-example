import { createSWRHooks } from 'trpc-swr'
import type { AppRouter } from '../server/router'

export const trpc = createSWRHooks<AppRouter>()
