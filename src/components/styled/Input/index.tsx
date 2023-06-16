import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import DateElement from './Date'
import { FieldType, FieldStyles, Label } from './styles'
import Select, { OptionType } from './Select'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`

const InputField = styled.input<FieldType>`
    ${FieldStyles}
`

interface InputType extends React.InputHTMLAttributes<any> {
    label: string
    name: string
    hideLabel?: boolean
    noBorders?: boolean
    inputType?: 'date' | 'select'
    options?: OptionType[]
}

const Input: React.FC<InputType> = ({
    label,
    name,
    options,
    inputType,
    hideLabel,
    noBorders,
    ...rest
}) => {
    const [field, meta] = useField(name)

    const valid = !(meta.touched && meta.error)

    const RenderInput = () => {
        switch (inputType) {
            case 'select':
                return (
                    <Select
                        label={label}
                        options={options || []}
                        field={field}
                        valid={valid}
                    />
                )

            case 'date':
                return <DateElement name={name} valid={valid} />

            default:
                return (
                    <InputField
                        id={name}
                        {...field}
                        {...rest}
                        valid={valid}
                        noBorders={noBorders}
                    />
                )
        }
    }

    return (
        <Wrapper>
            {hideLabel ? null : (
                <Label htmlFor={name} valid={valid}>
                    {label}
                </Label>
            )}
            {RenderInput()}
        </Wrapper>
    )
}

export default Input
