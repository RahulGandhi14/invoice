import { useField } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { themeType } from '../styled/Theme'
import { fontStyle1 } from '../styled/Typography'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`

type FieldType = { valid?: boolean }
const Field = styled.input<FieldType>`
    ${fontStyle1}
    color: ${({ theme }: themeType) => theme.color.text.formText};
    font-weight: bold;
    outline: none;
    border-radius: 4px;
    border: 1px solid
        ${({ theme, valid }: themeType & FieldType) =>
            valid ? theme.color.form.fieldBorder : '#EC5757'};
    background: ${({ theme }: themeType) => theme.color.form.fieldBg};
    padding: 1rem 1.25rem;

    :focus {
        border: 1px solid #9277ff;
    }
`

type LabelType = { valid?: boolean }
const Label = styled.label<LabelType>`
    ${fontStyle1}
    color: ${({ theme, valid }) =>
        valid ? theme.color.text.formLabel : '#EC5757'};
    transition: color 0.3s ease 0s;
`

type InputType = { label: string; name: string }

const Input: React.FC<InputType> = ({ label, name }) => {
    const [field, meta] = useField(name)

    return (
        <Wrapper>
            <Label htmlFor={name} valid={!(meta.touched && meta.error)}>
                {label}
            </Label>
            <Field id={name} {...field} valid={!(meta.touched && meta.error)} />
        </Wrapper>
    )
}

export default Input
