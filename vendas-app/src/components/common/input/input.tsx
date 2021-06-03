import { InputHTMLAttributes } from 'react'
import { formatReal } from 'app/util/money'
import { FormatUtils } from '@4us-dev/utils'
import { InputTextProps } from './inputText'

interface InputProps extends InputTextProps {
    onChange?: (value) => void;
}

export const Input: React.FC<InputProps> = ({
    onChange,
    currency,
    ...inputProps
}: InputProps) => {

    const onInputChange = (event) => {
        let value = event.target.value;

        if(value && currency){
            value = formatReal(value);
        }

        if(onChange){
            onChange(value)
        }
    }

    return (
        <Input onChange={onInputChange} {...inputProps} />
    )
}

interface FormikInputProps extends InputProps {
    onChange: (event) => void
}

export const FormikInput: React.FC<FormikInputProps> = (props: FormikInputProps) => {

    const onInputChange = (value) => {
        console.log(value);
        
        const event = { target: { name: props?.name, value } }
        props.onChange(event)
    }

    return (
        <Input onChange={onInputChange} {...props} />
    )
}

export const InputCPF: React.FC<InputProps> = (props: InputProps) => {

    const format = new FormatUtils();

    const onRawChange = (value) => {
        debugger
        const cpf = format.formatOnlyIntegers(value)
        props.onChange({ target: { name: props.name, value: cpf }})
    }

    const value = props.value && format.formatCPF(props.value as string)
    console.log(value);
    
    return (
        <FormikInput maxLength={14} onChange={onRawChange} value={value} {...props} />
    )
}