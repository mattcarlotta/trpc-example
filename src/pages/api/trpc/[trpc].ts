import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '../../../server/router'

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
  responseMeta({ type, errors }) {
    return errors.length === 0 && type === 'query'
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
