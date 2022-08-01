import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import { fontStyle1 } from '../Typography'
import Date from './Date'

import { FieldType, FieldStyles } from './styles'
import Select from './Select'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`

const InputField = styled.input<FieldType>`
    ${FieldStyles}
`

type LabelType = { valid?: boolean }
const Label = styled.label<LabelType>`
    ${fontStyle1}
    color: ${({ theme, valid }) =>
        valid ? theme.color.text.formLabel : '#EC5757'};
    transition: color 0.3s ease 0s;
`

interface InputType extends React.InputHTMLAttributes<any> {
    label: string
    name: string
    inputType?: 'date' | 'select'
}

const Input: React.FC<InputType> = ({ label, name, inputType, ...rest }) => {
    const [field, meta] = useField(name)

    const valid = !(meta.touched && meta.error)

    const RenderInput = () => {
        switch (inputType) {
            case 'select':
                return (
                    <Select
                        label={label}
                        options={[{ label: '1', value: 1 }]}
                        field={field}
                        valid={valid}
                    />
                )

            case 'date':
                return <Date field={field} valid={valid} />

            default:
                return (
                    <InputField id={name} {...field} {...rest} valid={valid} />
                )
        }
    }

    return (
        <Wrapper>
            <Label htmlFor={name} valid={valid}>
                {label}
            </Label>
            {RenderInput()}
        </Wrapper>
    )
}

export default Input
