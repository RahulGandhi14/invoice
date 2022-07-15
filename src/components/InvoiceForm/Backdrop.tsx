import ScrollLock from 'react-scrolllock'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

const StyledBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);
`

const animation: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
}

type BackdropType = {
    children?: React.ReactNode
    setOpen: (state: boolean) => void
}

const Backdrop: React.FC<BackdropType> = ({ children, setOpen }) => {
    const close = () => setOpen(false)

    return (
        <ScrollLock>
            <StyledBackdrop
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={close}
            >
                {children}
            </StyledBackdrop>
        </ScrollLock>
    )
}

export default Backdrop
