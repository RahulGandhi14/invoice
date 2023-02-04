import { InitialValuesType } from '../../data/Form'

export interface IInvoiceState {
    invoices: InitialValuesType[]
    currentInvoice: InitialValuesType | null
    openForm: boolean
}

export const CREATE_INVOICE = 'CREATE_INVOICE'
export const GET_INVOICE_BY_ID = 'GET_INVOICE_BY_ID'
export const OPEN_FORM = 'OPEN_FORM'

interface CreateInvoiceAction {
    type: typeof CREATE_INVOICE
    payload: InitialValuesType
}

interface GetInvoiceById {
    type: typeof GET_INVOICE_BY_ID
    payload: string
}

interface OpenForm {
    type: typeof OPEN_FORM
    payload: boolean
}

export type InvoiceActionsType = CreateInvoiceAction | GetInvoiceById | OpenForm
