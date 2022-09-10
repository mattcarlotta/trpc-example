import { createTRPCClient } from '@trpc/client'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import getBaseUrl from '../utils/getBaseUrl'
import { trpc } from '../utils/trpc'

const client = createTRPCClient({ url: getBaseUrl() + '/api/trpc' })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <trpc.TRPCProvider client={client}>
      <Component {...pageProps} />
    </trpc.TRPCProvider>
  )
}

export default App
