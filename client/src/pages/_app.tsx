import '@/styles/globals.css';
import '@/styles/index.css';
import '@/styles/register.css';
import '@/styles/userSelection.css';
import '@/components/Login/loginForm.css';
import '@/components/Logo/logo.css';
import '@/components/SupplierRegistrationForm/supplierRegistrationForm.css';
import '@/components/Supplier/supplier.css';
import '@/components/Suppliers/suppliers.css';

import type { AppProps } from 'next/app'
import Supplier from './supplier/list';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
