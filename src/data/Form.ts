import * as Yup from 'yup'

export enum EInvoiceStatus {
    PENDING = 'pending',
    PAID = 'paid',
    DRAFT = 'draft',
}

export type InvoiceItemType = {
    name: string
    quantity: number
    price: number
    total: number
}

export type InitialValuesType = {
    id?: string
    paymentDue?: string
    status: EInvoiceStatus
    total?: number
    senderAddress: {
        street: string
        city: string
        postCode: string
        country: string
    }
    clientName: string
    clientEmail: string
    clientAddress: {
        street: string
        city: string
        postCode: string
        country: string
    }
    createdAt: Date | ''
    paymentTerms: string
    description: string
    items: InvoiceItemType[]
}

export const initialValues: InitialValuesType = {
    senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
    },
    clientName: '',
    clientEmail: '',
    clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
    },
    createdAt: '',
    paymentTerms: '',
    description: '',
    items: [],
    status: EInvoiceStatus.DRAFT,
}

export const validationSchema = Yup.object().shape({
    senderAddress: Yup.object().shape({
        street: Yup.string().required('- All fields must be filled.'),
        city: Yup.string().required('- All fields must be filled.'),
        postCode: Yup.string().required('- All fields must be filled.'),
        country: Yup.string().required('- All fields must be filled.'),
    }),
    clientName: Yup.string().required('- All fields must be filled.'),
    clientEmail: Yup.string()
        .email('- Invalid email.')
        .required('- All fields must be filled.'),
    clientAddress: Yup.object().shape({
        street: Yup.string().required('- All fields must be filled.'),
        city: Yup.string().required('- All fields must be filled.'),
        postCode: Yup.string().required('- All fields must be filled.'),
        country: Yup.string().required('- All fields must be filled.'),
    }),
    createdAt: Yup.date().required('- All fields must be filled.'),
    paymentTerms: Yup.string().required('- All fields must be filled.'),
    description: Yup.string().required('- All fields must be filled.'),
    items: Yup.array()
        .of(
            Yup.object().shape({
                name: Yup.string().required('- All fields must be filled.'),
                quantity: Yup.number()
                    .typeError('- Invalid input.')
                    .required('- All fields must be filled.'),
                price: Yup.number()
                    .typeError('- Invalid input.')
                    .required('- All fields must be filled.'),
                total: Yup.number(),
            })
        )
        .min(1, '- An item must be added.'),
})
