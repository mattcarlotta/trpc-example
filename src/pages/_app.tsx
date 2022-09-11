import { httpLink } from '@trpc/client/links/httpLink'
import { withTRPC } from '@trpc/next'
import { AppType } from 'next/dist/shared/lib/utils'
import { AppRouter } from '../server/router'
import '../styles/globals.css'
import getBaseUrl from '../utils/getBaseUrl'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        httpLink({
          url: '/api/trpc'
        })
      ],
      url: getBaseUrl() + '/api/trpc'
    }
  }
})(MyApp)
