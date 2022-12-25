import { createAction } from '@reduxjs/toolkit'
import { InitialValuesType } from '../../data/Form'
import { CREATE_INVOICE } from './types'

export const createInvoice = createAction<InitialValuesType>(CREATE_INVOICE)
