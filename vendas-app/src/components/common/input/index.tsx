import { InputHTMLAttributes } from 'react'
import { formatReal } from 'app/utils/money'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    onChange?: (value) => void;
    label: string;
    columnClasses?: string;
    currency?: boolean
}

export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    currency,
    ...inputProps
}: InputProps) => {

    return (
        <div className={`field column ${columnClasses}` }>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input className="input" 
                    id={id} {...inputProps}
                    onChange={ event => {
                        let value = event.target.value;

                        if(value && currency){
                            value = formatReal(value)
                        }

                        if(onChange){
                            onChange(value)
                        }
                    }}/>
            </div>
        </div>
    )
}