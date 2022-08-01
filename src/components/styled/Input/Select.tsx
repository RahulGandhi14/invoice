import styled from 'styled-components'
import { FieldStyles, FieldType } from './styles'
import { FieldInputProps } from 'formik'
import { themeType } from '../Theme'

const SelectField = styled.select<FieldType>`
    ${FieldStyles}

    &:required:invalid {
        color: ${({ theme }: themeType) => theme.color.text.placeholder};
    }

    & option[value=''][disabled] {
        display: none;
    }
`

type OptionType = { label: string; value: string | number }

type SelectType = {
    label: string
    field: FieldInputProps<any>
    valid: boolean
    options: OptionType[]
}

const Select: React.FC<SelectType> = ({ label, valid, field, options }) => {
    return (
        <SelectField {...field} valid={valid} required>
            <option value="" disabled selected>
                Select {label}
            </option>
            {options.map((item) => (
                <option value={item.value}>{item.label}</option>
            ))}
        </SelectField>
    )
}

export default Select
