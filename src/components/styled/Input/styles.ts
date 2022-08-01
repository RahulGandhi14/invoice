import { css } from 'styled-components'
import { fontStyle1 } from '../Typography'
import { themeType } from '../Theme'

export type FieldType = { valid?: boolean }

export const FieldStyles = css`
    ${fontStyle1}
    width: 100%;
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

    ::placeholder {
        color: ${({ theme }: themeType) => theme.color.text.placeholder};
    }
`
