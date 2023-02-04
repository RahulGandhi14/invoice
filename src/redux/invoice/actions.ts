import { createAction } from '@reduxjs/toolkit'
import { InitialValuesType } from '../../data/Form'
import { CREATE_INVOICE, GET_INVOICE_BY_ID } from './types'

export const createInvoice = createAction<InitialValuesType>(CREATE_INVOICE)

export const getInvoiceById = createAction<string>(GET_INVOICE_BY_ID)
