import React from 'react'
import { FieldArray, useFormikContext } from 'formik'
import styled from 'styled-components'
import { InitialValuesType } from '../../data/Form'
import { Legend } from '../styled/Input/styles'
import Item from './Item'
import Button from '../styled/Button'

const ItemListLegend = styled(Legend)`
    font-size: 1.125rem;
    color: #927f98;
`

const ItemList: React.FC = () => {
    const { values } = useFormikContext<InitialValuesType>()

    return (
        <>
            <ItemListLegend>ItemList</ItemListLegend>
            <FieldArray
                name="items"
                render={(helpers) => (
                    <div>
                        {values.items.map((_, idx) => (
                            <Item key={idx} idx={idx} helpers={helpers} />
                        ))}
                        <Button
                            type="button"
                            variant="quaternary"
                            wide
                            onClick={() =>
                                helpers.push({
                                    name: '',
                                    quantity: '',
                                    price: '',
                                    total: 0,
                                })
                            }
                        >
                            + Add New Item
                        </Button>
                    </div>
                )}
            />
        </>
    )
}

export default ItemList
