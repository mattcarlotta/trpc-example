import { createTRPCClient } from '@trpc/client'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { trpc } from '../utils/trpc'

const client = createTRPCClient({ url: 'http://localhost:3000/api/trpc' })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <trpc.TRPCProvider client={client}>
      <Component {...pageProps} />
    </trpc.TRPCProvider>
  )
}

export default App
