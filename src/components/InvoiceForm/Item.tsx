import { FieldArrayRenderProps } from 'formik'
import React from 'react'
import styled from 'styled-components'
import Input from '../styled/Input'
import DeleteIcon from '../../assets/icon-delete.svg'
import { fontStyle1 } from '../styled/Typography'

const Wrapper = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 1.5rem;
    grid-template-columns: 2.5fr 0.7fr 1.5fr 1fr min-content;
    margin-bottom: 1rem;
`

const TotalWrapper = styled.div`
    line-height: 0;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`

const DeleteButton = styled.img`
    align-self: center;
    cursor: pointer;
`

const TotalCount = styled.span`
    ${fontStyle1};
    font-weight: bold;
`

type ItemType = {
    idx: number
    helpers: FieldArrayRenderProps
}

const Item: React.FC<ItemType> = ({ idx, helpers }) => {
    const hideLabel = idx > 0

    return (
        <Wrapper>
            <Input
                label="Item name"
                name={`items[${idx}].name`}
                hideLabel={hideLabel}
            />
            <Input
                label="Qty."
                name={`items[${idx}].quantity`}
                hideLabel={hideLabel}
            />
            <Input
                label="Price"
                name={`items[${idx}].price`}
                hideLabel={hideLabel}
            />
            <Input
                label="Total"
                name={`items[${idx}].total`}
                hideLabel={hideLabel}
                noBorders={true}
                disabled
            />
            <DeleteButton
                src={DeleteIcon}
                alt="Delete icon"
                onClick={() => helpers.remove(idx)}
            />
        </Wrapper>
    )
}

export default Item
