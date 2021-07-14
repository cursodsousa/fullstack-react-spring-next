import { session, signIn, signOut, useSession } from 'next-auth/client'
import { PropsWithChildren, ReactNode } from 'react'

interface ProtectedComponentProps {
    children: ReactNode;
}

export const ProtectedComponent: React.FC<ProtectedComponentProps> = ({
    children
}: ProtectedComponentProps) => {

    const [session, loading] = useSession()

    console.log(session);
    

    if(!session){
        return <p onClick={() => signIn()}>Clique para logar</p>
    }

    return (
        <>
            {children}
        </>
    )
}