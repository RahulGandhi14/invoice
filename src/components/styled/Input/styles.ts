import styled, { css } from 'styled-components'
import { fontStyle1 } from '../Typography'
import { themeType } from '../Theme'

export type FieldType = { valid?: boolean; noBorders?: boolean }

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

    ${({ noBorders, theme }: FieldType & themeType) =>
        noBorders &&
        css`
            border: none;
            padding-left: 0;
            color: ${({ theme }: themeType) => theme.color.text.bodyA};
        `}
`

export const Legend = styled.legend`
    ${fontStyle1}
    margin-bottom:1.5rem;
    font-weight: bold;
    color: #7c5dfa;
`

type LabelType = { valid?: boolean }
export const Label = styled.label<LabelType>`
    ${fontStyle1}
    color: ${({ theme, valid }) =>
        valid || valid === undefined ? theme.color.text.formLabel : '#EC5757'};
    transition: color 0.3s ease 0s;
`
