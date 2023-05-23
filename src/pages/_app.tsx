import '@/styles/globals.css'
import '@/components/Login/login.css'
import '@/components/Logo/logo.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
