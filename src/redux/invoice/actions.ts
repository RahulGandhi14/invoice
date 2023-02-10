import { createAction } from '@reduxjs/toolkit'
import { InitialValuesType } from '../../data/Form'
import {
    CREATE_INVOICE,
    DELETE_INVOICE,
    EDIT_INVOICE,
    GET_INVOICE_BY_ID,
    OPEN_FORM,
} from './types'

export const createInvoice = createAction<InitialValuesType>(CREATE_INVOICE)

export const getInvoiceById = createAction<string>(GET_INVOICE_BY_ID)

export const openForm = createAction<boolean>(OPEN_FORM)

export const editInvoice = createAction<InitialValuesType>(EDIT_INVOICE)

export const deleteInvoice = createAction<string>(DELETE_INVOICE)
