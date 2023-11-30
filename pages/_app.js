import '@/styles/globals.css';
import Layouts from '@/components/layouts';
import { AppProvider } from '@/config/globals';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </AppProvider>
  )
}
