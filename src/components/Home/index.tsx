import { motion, Variants } from 'framer-motion'
import { useAppDispatch } from '../../redux/hooks'
import { openForm } from '../../redux/invoice/actions'
import { PageWrapper } from '../styled/shared'
import Header from './Header'
import InvoiceList from './InvoiceList'

const variants: Variants = {
    exit: {
        x: '-50%',
        opacity: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            duration: 0.5,
        },
    },
}

const Home = () => {
    const dispatch = useAppDispatch()

    const setOpen = (state: boolean) => dispatch(openForm(state))

    return (
        <>
            <PageWrapper variants={variants} exit="exit">
                <Header setOpen={setOpen} />
                <InvoiceList />
            </PageWrapper>
        </>
    )
}

export default Home
