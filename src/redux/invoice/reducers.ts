import { createReducer } from '@reduxjs/toolkit'
import { createInvoice } from './actions'
import { IInvoiceState } from './types'
import invoices from '../../data/data.json'
import { InitialValuesType } from '../../data/Form'
import { getNextId } from '../../utils/id'

const initialState: IInvoiceState = {
    invoices: invoices as unknown as InitialValuesType[],
}

export default createReducer(initialState, (builder) => {
    builder.addCase(createInvoice, (state, action) => {
        const total = action.payload.items.reduce(
            (total, current) => total + current.total,
            0
        )
        const prevId = state.invoices?.length ? state.invoices[0].id : ''
        state.invoices = [
            { ...action.payload, total, id: getNextId(prevId || 'AA00') },
            ...state.invoices,
        ]
    })
})
