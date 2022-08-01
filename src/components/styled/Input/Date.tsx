import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldStyles, FieldType } from './styles'
import { FieldInputProps } from 'formik'

const DateField = styled(ReactDatePicker)<FieldType>`
    ${FieldStyles}
`

type DateType = { field: FieldInputProps<any> } & FieldType

const Date = ({ valid, field }: DateType) => {
    return <DateField {...field} valid={valid} />
}

export default Date
