import '@/styles/globals.css';
import '@/components/Login/login.css';
import '@/components/Logo/logo.css';
import '@/components/Form/form.css';
import '@/styles/index.css';
import '@/styles/header.css';
import '@/styles/selection.css';
import '@/components/Post/post.css';
import '@/components/Posts/posts.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
