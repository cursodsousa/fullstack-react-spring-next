import Head from 'next/head'
import { Layout, Dashboard } from 'components'
import { useDashboardService } from 'app/services'
import { DashboardData } from 'app/models/dashboard'
import { RotaAutenticada } from 'components'

interface HomeProps {
  dashboard: DashboardData
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <RotaAutenticada>
      <Head>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout titulo="Dashboard">
        <Dashboard clientes={props.dashboard.clientes} 
                   produtos={props.dashboard.produtos} 
                   vendas={props.dashboard.vendas} 
                   vendasPorMes={props.dashboard.vendasPorMes}
                   />
      </Layout>
    </RotaAutenticada>
  )
}

export async function getStaticProps(context){

  const service = useDashboardService()
  const dashboard: DashboardData = await service.get(); 

  return {
    props: {
      dashboard
    },
    revalidate: 5// em segundos
  }
} 

export default Home;
