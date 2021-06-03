import { InputHTMLAttributes } from 'react'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    columnClasses?: string;
    currency?: boolean;
    error?: string;
}

export const InputText: React.FC<InputTextProps> = ({
    label,
    columnClasses,
    id,
    currency,
    error,
    ...inputProps
}: InputTextProps) => {

    return (
        <div className={`field column ${columnClasses}` }>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input className="input" 
                    id={id} {...inputProps}/>
                {error &&
                    <p className="help is-danger">{ error }</p>
                }
            </div>
        </div>
    )
}