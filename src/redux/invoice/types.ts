import { InitialValuesType } from '../../data/Form'

export interface IInvoiceState {
    invoices: InitialValuesType[]
}

export const CREATE_INVOICE = 'CREATE_INVOICE'

interface CreateInvoiceAction {
    type: typeof CREATE_INVOICE
    payload: InitialValuesType
}

export type InvoiceActionsType = CreateInvoiceAction
