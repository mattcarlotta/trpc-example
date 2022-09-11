import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter, createContext } from '../../../server/router'

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  responseMeta({ ctx, type, errors }) {
    return ctx?.res && errors.length === 0 && type === 'query'
      ? {
          headers: {
            'cache-control': `s-maxage=1, stale-while-revalidate=${
              60 * 60 * 24
            }`,
            'cache-date': `${new Date().toUTCString()}`
          }
        }
      : {}
  }
})
