import { AppProps } from 'next/app'
import 'bulma/css/bulma.css'

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
