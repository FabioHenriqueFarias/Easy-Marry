import '@/styles/globals.css';
import '@/components/Login/login.css';
import '@/components/Logo/logo.css';
// import '@/components/Form/form.css';
import '@/styles/index.css';
import '@/styles/header.css';
import '@/styles/typeselection.css';
import '@/components/Supplier/supplier.css';
import '@/components/Suppliers/suppliers.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
