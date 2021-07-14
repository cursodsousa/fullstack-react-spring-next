import { signIn, useSession } from 'next-auth/client'

interface RotaAutenticadaProps {
    children: React.ReactNode;
}

export const RotaAutenticada: React.FC<RotaAutenticadaProps> = ({
    children
}) => {

    const [ session, loading ] = useSession()

    console.log(session);

    if(!session){
        return (
            <button onClick={() => signIn()}>
                Você não está logado, clique para logar
            </button>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}