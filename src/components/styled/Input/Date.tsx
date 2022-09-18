import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldStyles, FieldType } from './styles'
import { useFormikContext } from 'formik'

const DateField = styled(ReactDatePicker)<FieldType>`
    ${FieldStyles}
`

type DateType = { name: string } & FieldType

const DateElement = ({ name, valid }: DateType) => {
    const {
        setFieldValue,
        values,
    }: {
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean | undefined
        ) => void
        values: any
    } = useFormikContext()

    return (
        <DateField
            value={
                values?.[name]
                    ? new Date(String(values?.[name])).toLocaleDateString(
                          'en-GB'
                      )
                    : ''
            }
            onChange={(value) => setFieldValue(name, value)}
            valid={valid}
        />
    )
}

export default DateElement
