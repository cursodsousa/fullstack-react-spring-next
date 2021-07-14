import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'bulma/css/bulma.css'
import 'components/common/loader/loader.css'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
