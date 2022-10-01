import styled from 'styled-components'
import plusIcon from '../../assets/icon-plus.svg'
import Button from '../styled/Button'

const Btn = styled(Button)`
    padding: 0.5rem;
    padding-right: 1rem;

    & img {
        height: 0.625rem;
        width: 0.625rem;
    }

    & span {
        line-height: 0;
        border-radius: 50%;
        display: inline-block;
        background-color: #fff;
        padding: 0.625rem;
        margin-right: 0.5rem;
    }

    &::after {
        content: 'New Invoice';
    }

    @media only screen and (max-width: 600px) {
        &::after {
            content: 'New';
        }
    }
`
type NewInvoiceBtnPropType = {
    setOpen: (state: boolean) => void
}

const NewInvoiceBtn: React.FC<NewInvoiceBtnPropType> = ({ setOpen }) => {
    return (
        <Btn type="button" onClick={() => setOpen(true)}>
            <span>
                <img src={plusIcon} alt="Plus icon" />
            </span>
        </Btn>
    )
}

export default NewInvoiceBtn
