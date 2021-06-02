import { AppProps } from 'next/app'
import 'bulma/css/bulma.css'
import 'components/common/loader/loader.css'

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
