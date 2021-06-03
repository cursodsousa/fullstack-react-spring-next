import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, useEffect, useState } from 'react'
import { formatReal } from 'app/util/money'
import { FormatUtils } from '@4us-dev/utils'

const formatter = new FormatUtils();

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    columnClasses?: string;
    error?: string;
    formatter?: (value: string) => string;
}


export const Input: React.FC<InputProps> = ({
    label,
    columnClasses,
    id,
    error,
    formatter,
    onChange,
    ...inputProps
}: InputProps) => {

    const onRawChange = (event) => {
        const { name, value } = event.target
        const formatedValue = (formatter && formatter(value as string)) || value
        onChange({
            ...event,
            target: {
                name,
                value: formatedValue
            }
        })
        
    }

    return (
        <div className={`field column ${columnClasses}` }>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input className="input" onChange={onRawChange}
                    id={id} {...inputProps}/>
                {error &&
                    <p className="help is-danger">{ error }</p>
                }
            </div>
        </div>
    )
}

export const InputMoney: React.FC<InputProps> = (props: InputProps) => {

    const formatMoney = (value: string) => {
        return formatReal(value)
    }

    return (
        <Input {...props} formatter={formatMoney} />
    )
}

export const InputCPF: React.FC<InputProps> = (props: InputProps) => {
    return (
        <Input {...props} formatter={formatter.formatCPF} />
    )
}

export const InputPhone: React.FC<InputProps> = (props: InputProps) => {
    return (
        <Input {...props} formatter={formatter.formatPhone} />
    )
}

export const InputNumber: React.FC<InputProps> = (props: InputProps) => {
    return (
        <Input {...props} formatter={formatter.formatOnlyIntegers} />
    )
}

export const InputDate: React.FC<InputProps> = (props: InputProps) => {

    const formatData = (value: string) => {
       const data = formatter.formatOnlyIntegers(value)
       const size = value.length;

       if(size <= 2){
           return data;
       }

       if(size <= 4){
           return data.substr(0 , 2) + "/" + data.substr(2, 2) 
       }

       if(size <= 6){
           return data.substr(0 , 2) + "/" + data.substr(2, 2) + "/" + data.substr(4, 2)
       }
    }

    return (
        <Input {...props} maxLength={10} formatter={formatData} />
    )
}