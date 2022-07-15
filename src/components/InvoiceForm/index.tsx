import { Formik } from 'formik'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {
    initialValues,
    InitialValuesType,
    validationSchema,
} from '../../data/Form'
import Form from './Form'

type InvoiceFormPropType = {
    open: boolean
    setOpen: (state: boolean) => void
}

const InvoiceForm: React.FC<InvoiceFormPropType> = ({ open, setOpen }) => {
    const onSubmit = (values: InitialValuesType) => {
        console.log(values)
    }

    return (
        <AnimatePresence>
            {open ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form setOpen={setOpen} />
                </Formik>
            ) : null}
        </AnimatePresence>
    )
}

export default InvoiceForm
