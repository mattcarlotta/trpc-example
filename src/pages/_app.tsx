import { withTRPC } from '@trpc/next'
import { AppType } from 'next/dist/shared/lib/utils'
import { AppRouter } from '../server/router'
import '../styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withTRPC<AppRouter>({
  config() {
    return {
      url: 'http://localhost:3000/api/trpc'
    }
  }
})(MyApp)
