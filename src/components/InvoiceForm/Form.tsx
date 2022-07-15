import { Form as FormikForm } from 'formik'
import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'
import Backdrop from './Backdrop'

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: ${(props) => props.theme.color.form.bg};
    border-radius: 0 20px 20px 0;
`

const StyledForm = styled(FormikForm)`
    width: 100vw;
    max-width: 40rem;
    height: 100vh;
    margin-left: 6.5rem;
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
                transition={{ type: 'spring', stiffness: 60 }}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <StyledForm>Hey</StyledForm>
            </Wrapper>
        </>
    )
}

export default Form
