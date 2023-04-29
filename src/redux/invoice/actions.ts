import { createAction } from '@reduxjs/toolkit'
import { InitialValuesType } from '../../data/Form'
import {
    CREATE_INVOICE,
    DELETE_INVOICE,
    EDIT_INVOICE,
    FILTER_INVOICES,
    FilterStatusType,
    GET_INVOICE_BY_ID,
    OPEN_FORM,
    OPEN_DELETE_INVOICE_MODAL,
    DELETE_INVOICE_ID,
} from './types'

export const createInvoice = createAction<InitialValuesType>(CREATE_INVOICE)

export const getInvoiceById = createAction<string>(GET_INVOICE_BY_ID)

export const openForm = createAction<boolean>(OPEN_FORM)

export const editInvoice = createAction<InitialValuesType>(EDIT_INVOICE)

export const openDeleteInvoiceModal = createAction<boolean>(
    OPEN_DELETE_INVOICE_MODAL
)

export const deleteInvoiceId = createAction<string>(DELETE_INVOICE_ID)

export const deleteInvoice = createAction<string>(DELETE_INVOICE)

export const filterInvoice = createAction<FilterStatusType>(FILTER_INVOICES)
