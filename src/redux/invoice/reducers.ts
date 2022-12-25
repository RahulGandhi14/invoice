import { createReducer } from '@reduxjs/toolkit'
import { createInvoice } from './actions'
import { IInvoiceState } from './types'
import invoices from '../../data/data.json'
import { InitialValuesType } from '../../data/Form'

const initialState: IInvoiceState = {
    invoices: invoices as unknown as InitialValuesType[],
}

export default createReducer(initialState, (builder) => {
    builder.addCase(createInvoice, (state, action) => {
        state.invoices = [...state.invoices, action.payload]
    })
})
