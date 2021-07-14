import { signIn, useSession } from 'next-auth/client'
import { Loader } from 'components'

interface RotaAutenticadaProps {
    children: React.ReactNode;
}

export const RotaAutenticada: React.FC<RotaAutenticadaProps> = ({
    children
}) => {

    const [ session, loading ] = useSession()

    if(loading){
        return (
            <Loader show />
        )
    }

    if(!session && !loading){
        signIn()
        return null;
    }

    return (
        <div>
            {children}
        </div>
    )
}