import { Formik } from 'formik'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import {
    initialValues,
    InitialValuesType,
    validationSchema,
} from '../../data/Form'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { createInvoice, editInvoice } from '../../redux/invoice/actions'
import Form from './Form'

type InvoiceFormPropType = {
    open: boolean
    setOpen: (state: boolean) => void
}

const InvoiceForm: React.FC<InvoiceFormPropType> = ({ open, setOpen }) => {
    const dispatch = useAppDispatch()
    const currentInvoice = useAppSelector(
        (state) => state.invoice.currentInvoice
    )
    const editCurrentInvoice = useAppSelector(
        (state) => state.invoice.editCurrentInvoice
    )

    const [initalInvoiceValues, setInitialInvoiceValues] =
        useState(initialValues)

    useEffect(() => {
        if (currentInvoice) {
            setInitialInvoiceValues(currentInvoice)
        } else {
            setInitialInvoiceValues(initialValues)
        }
    }, [currentInvoice])

    const onSubmit = (values: InitialValuesType) => {
        if (editCurrentInvoice) {
            dispatch(editInvoice(values))
        } else {
            dispatch(createInvoice(values))
        }
        setOpen(false)
    }

    return (
        <AnimatePresence>
            {open ? (
                <Formik
                    enableReinitialize
                    initialValues={initalInvoiceValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form setOpen={setOpen} editInvoice={editCurrentInvoice} />
                </Formik>
            ) : null}
        </AnimatePresence>
    )
}

export default InvoiceForm
