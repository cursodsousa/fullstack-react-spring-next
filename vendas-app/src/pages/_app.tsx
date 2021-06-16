import { AppProps } from 'next/app'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'bulma/css/bulma.css'
import 'components/common/loader/loader.css'

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
