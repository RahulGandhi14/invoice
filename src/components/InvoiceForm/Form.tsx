import { Form as FormikForm } from 'formik'
import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'
import { H2 } from '../styled/Headings'
import ActionButtons from './ActionButtons'
import Backdrop from './Backdrop'
import FormFields from './FormFields'

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: ${(props) => props.theme.color.form.bg};
    border-radius: 0 20px 20px 0;
    transition: background 0.3s ease 0s;
`

const StyledForm = styled(FormikForm)`
    width: 100vw;
    max-width: 40rem;
    height: 100vh;
    margin-left: 6.5rem;
    padding: 3.5rem 2.5rem 2rem 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
        margin-top: 5.5rem;
        margin-left: 0;
        height: calc(100vh - 5.5rem);
    }

    @media only screen and (max-width: 600px) {
        padding: 2rem;
    }
`

const Heading2 = styled(H2)`
    font-size: 1.5rem;
    margin-bottom: 3rem;
`

const variants: Variants = {
    hidden: {
        x: '-100%',
    },
    visible: { x: 0 },
}

type FormPropType = {
    setOpen: (state: boolean) => void
}

const Form: React.FC<FormPropType> = ({ setOpen }) => {
    return (
        <>
            <Backdrop setOpen={setOpen} />
            <Wrapper
                variants={variants}
                transition={{ type: 'spring', stiffness: 65 }}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <StyledForm>
                    <Heading2>Create Invoice</Heading2>
                    <FormFields />
                    <ActionButtons setOpen={setOpen} />
                </StyledForm>
            </Wrapper>
        </>
    )
}

export default Form
