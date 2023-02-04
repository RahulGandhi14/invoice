import { InitialValuesType } from '../../data/Form'

export interface IInvoiceState {
    invoices: InitialValuesType[]
    currentInvoice: InitialValuesType | null
}

export const CREATE_INVOICE = 'CREATE_INVOICE'
export const GET_INVOICE_BY_ID = 'GET_INVOICE_BY_ID'

interface CreateInvoiceAction {
    type: typeof CREATE_INVOICE
    payload: InitialValuesType
}

interface GetInvoiceById {
    type: typeof GET_INVOICE_BY_ID
    payload: string
}

export type InvoiceActionsType = CreateInvoiceAction | GetInvoiceById
