import { EInvoiceStatus, InitialValuesType } from '../../data/Form'

export interface IInvoiceState {
    invoices: InitialValuesType[]
    currentInvoice: InitialValuesType | null
    openForm: boolean
    editCurrentInvoice: boolean
    openDeleteInvoiceModal: boolean
    deleteInvoiceId: string
    filters: EInvoiceStatus[]
}

export type FilterStatusType = EInvoiceStatus[]

export const CREATE_INVOICE = 'CREATE_INVOICE'
export const GET_INVOICE_BY_ID = 'GET_INVOICE_BY_ID'
export const OPEN_FORM = 'OPEN_FORM'
export const EDIT_INVOICE = 'EDIT_INVOICE'
export const OPEN_DELETE_INVOICE_MODAL = 'OPEN_DELETE_INVOICE_MODAL'
export const DELETE_INVOICE_ID = 'DELETE_INVOICE_ID'
export const DELETE_INVOICE = 'DELETE_INVOICE'
export const FILTER_INVOICES = 'FILTER_INVOICES'
export const MARK_INVOICE_AS_PAID = 'MARK_INVOICE_AS_PAID'

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

interface OpenDeleteInvoiceModal {
    type: typeof OPEN_DELETE_INVOICE_MODAL
    payload: boolean
}

interface DeleteInvoice {
    type: typeof DELETE_INVOICE
    payload: string
}

interface FilterInvoice {
    type: typeof FILTER_INVOICES
    payload: FilterStatusType
}

interface MarkInvoiceAsPaid {
    type: typeof MARK_INVOICE_AS_PAID
    payload: string
}

export type InvoiceActionsType =
    | CreateInvoiceAction
    | GetInvoiceById
    | OpenForm
    | EditInvoice
    | OpenDeleteInvoiceModal
    | DeleteInvoice
    | FilterInvoice
    | MarkInvoiceAsPaid
