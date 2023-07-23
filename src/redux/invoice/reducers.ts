import { createReducer } from '@reduxjs/toolkit'
import {
    createInvoice,
    deleteInvoice,
    deleteInvoiceId,
    editInvoice,
    filterInvoice,
    getInvoiceById,
    markInvoiceAsPaid,
    openDeleteInvoiceModal,
    openForm,
} from './actions'
import { IInvoiceState } from './types'
import invoices from '../../data/data.json'
import { EInvoiceStatus, InitialValuesType } from '../../data/Form'
import { getNextId } from '../../utils/id'

const initialState: IInvoiceState = {
    invoices: invoices as unknown as InitialValuesType[],
    currentInvoice: null,
    openForm: false,
    editCurrentInvoice: false,
    openDeleteInvoiceModal: false,
    deleteInvoiceId: '',
    filters: [],
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(createInvoice, (state, action) => {
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
        .addCase(editInvoice, (state, action) => {
            state.invoices = state.invoices.map((invoice) => {
                if (invoice.id === state.currentInvoice?.id) {
                    const total = action.payload.items.reduce(
                        (total, current) => total + current.total,
                        0
                    )
                    return { ...action.payload, total }
                }
                return { ...invoice }
            })
        })
        .addCase(getInvoiceById, (state, action) => {
            let currentInvoice = state.invoices.find(
                (invoice) => invoice.id === action.payload
            ) as unknown as InitialValuesType
            if (!currentInvoice) {
                state.currentInvoice = null
                state.editCurrentInvoice = false
            } else {
                state.currentInvoice = { ...currentInvoice }
                state.editCurrentInvoice = true
            }
        })
        .addCase(openForm, (state, action) => {
            state.openForm = action.payload
        })
        .addCase(openDeleteInvoiceModal, (state, action) => {
            state.openDeleteInvoiceModal = action.payload
        })
        .addCase(deleteInvoice, (state, action) => {
            state.invoices = state.invoices.filter(
                (invoice) => invoice.id !== action.payload
            )
        })
        .addCase(deleteInvoiceId, (state, action) => {
            state.deleteInvoiceId = action.payload
        })
        .addCase(filterInvoice, (state, action) => {
            state.filters = action.payload || []
        })
        .addCase(markInvoiceAsPaid, (state, action) => {
            const idxOfInvoice = state.invoices.findIndex(
                (invoice) => invoice.id === action.payload
            )
            state.invoices[idxOfInvoice]['status'] = EInvoiceStatus.PAID
        })
})
