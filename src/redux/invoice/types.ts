import { InitialValuesType } from '../../data/Form'

export interface IInvoiceState {
    invoices: InitialValuesType[]
    currentInvoice: InitialValuesType | null
    openForm: boolean
    editCurrentInvoice: boolean
}

export const CREATE_INVOICE = 'CREATE_INVOICE'
export const GET_INVOICE_BY_ID = 'GET_INVOICE_BY_ID'
export const OPEN_FORM = 'OPEN_FORM'
export const EDIT_INVOICE = 'EDIT_INVOICE'
export const DELETE_INVOICE = 'DELETE_INVOICE'

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

interface EditInvoice {
    type: typeof EDIT_INVOICE
    payload: InitialValuesType
}

interface DeleteInvoice {
    type: typeof DELETE_INVOICE
    payload: string
}

export type InvoiceActionsType =
    | CreateInvoiceAction
    | GetInvoiceById
    | OpenForm
    | EditInvoice
    | DeleteInvoice
