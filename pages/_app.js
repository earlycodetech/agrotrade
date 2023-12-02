import '@/styles/globals.css';
import Layouts from '@/components/layouts';
import { AppProvider } from '@/config/globals';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </AppProvider>
    </SessionProvider>
  )
}
