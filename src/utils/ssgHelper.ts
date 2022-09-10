import { createSSGHelpers } from '@trpc/react/ssg'
import superjson from 'superjson'
import { appRouter } from '../server/router'

export const ssg = createSSGHelpers({
  router: appRouter,
  ctx: () => null,
  transformer: superjson
})
