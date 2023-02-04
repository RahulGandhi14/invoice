import { useAppDispatch } from '../../redux/hooks'
import { openForm } from '../../redux/invoice/actions'
import { PageWrapper } from '../styled/shared'
import Header from './Header'
import InvoiceList from './InvoiceList'

const Home = () => {
    const dispatch = useAppDispatch()

    const setOpen = (state: boolean) => dispatch(openForm(state))

    return (
        <>
            <PageWrapper>
                <Header setOpen={setOpen} />
                <InvoiceList />
            </PageWrapper>
        </>
    )
}

export default Home
