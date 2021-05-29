import { ReactNode, useState } from 'react'
import { Menu } from './menu'

export const createMessage = (text, field, color, header, deletable): IMessage => {
    return {
        text,  field, color, header, deletable
    }
}

export const successMessage = (text): IMessage => {
    return {
        text, color: "success"
    }
}

export const errorMessage = (text, field?): IMessage => {
    return {
        text,  field, color: "danger"
    }
}

export interface IMessage {
    field?: string;
    text: string;
    color: string;
    header?: string;
    deletable?: boolean;
}

interface LayoutProps {
    titulo?: string; 
    children?: ReactNode; 
    messages?: Array<IMessage>;
}

interface MessageProps {
    message: IMessage;
}

export const Message: React.FC<MessageProps> = ({
    message
}) => {
    debugger
    const [ hide, setHide  ] = useState<boolean>(false)

    const hideMessage = () => {
        setHide(true)
    }

    if(hide){
        return <></>;
    }
   
    return (
        <article className={`message is-${message.color}`}>
            {message.header && 
                <div className="message-header">
                    <p>{message.header}</p>
                    {message.deletable &&
                        <button onClick={hideMessage} className="delete" aria-label="delete"></button>
                    }
                </div>
            }
            <div className="message-body">
                { message.field && `${message.field}: `}
                { message.text}
            </div>
        </article>
    )
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />

                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">
                                    {props.titulo}
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {props.messages?.map( msg => <Message key={msg.text} message={msg} />)}
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}