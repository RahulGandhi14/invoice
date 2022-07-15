import styled from 'styled-components'
import { themeType } from './Theme'
import checkIcon from '../../assets/icon-check.svg'
import { fontStyle1 } from './Typography'

const Container = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;

    &:hover {
        & .checkmark {
            border-color: #7c5dfa;
        }
    }
`

const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
    /* hiding default checkbox */
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;

    & ~ .checkmark img {
        display: none;
    }

    &:checked ~ .checkmark {
        background-color: #7c5dfa;
        border-color: #7c5dfa;
    }

    &:checked ~ .checkmark img {
        display: block;
    }
`

const CheckMark = styled.span`
    /* creating custom checkbox */
    /* position: absolute; */
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 2px;
    border: ${({ theme }: themeType) => `1px solid ${theme.color.checkbox.bg}`};
    background-color: ${({ theme }: themeType) => theme.color.checkbox.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
    transition: background-color 0.3s;
`

const Label = styled.span`
    ${fontStyle1}
    font-weight: 700;
    color: ${({ theme }: themeType) => theme.color.text.heading};
`

interface propType {
    label: string
    checked?: boolean
}

const CheckBox = ({ label, checked }: propType) => {
    return (
        <Container>
            <InputCheckbox checked={checked} />
            <CheckMark className="checkmark">
                <img src={checkIcon} alt="Check Icon" />
            </CheckMark>
            <Label>{label}</Label>
        </Container>
    )
}

export default CheckBox
