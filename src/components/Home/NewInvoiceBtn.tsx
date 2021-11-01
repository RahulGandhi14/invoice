import styled from 'styled-components'
import plusIcon from '../../assets/icon-plus.svg'

const Button = styled.button`
    font-family: 'Spartan', sans-serif;
    border: none;
    cursor: pointer;
    border-radius: 100px;
    padding: 0.5rem;
    padding-right: 1rem;
    background-color: #7c5dfa;
    font-weight: 700;
    color: #fff;
    line-height: 1.25;
    font-size: 0.75rem;

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
`

const NewInvoiceBtn = () => {
    return (
        <Button>
            <span>
                <img src={plusIcon} alt="Plus icon" />
            </span>
            New Invoice
        </Button>
    )
}

export default NewInvoiceBtn
