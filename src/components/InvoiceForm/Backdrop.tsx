import styled from 'styled-components'
import { motion, MotionStyle, Variants } from 'framer-motion'

type StyledBackdropProps = { zIndex?: number }

const StyledBackdrop = styled(motion.div)<StyledBackdropProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: ${(props) => props.zIndex || 5};
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
    children?: JSX.Element
    setOpen: (state: boolean) => void
    zIndex?: number
    style?: MotionStyle
}

const Backdrop: React.FC<BackdropType> = ({
    children,
    setOpen,
    zIndex,
    style,
}) => {
    const close = () => setOpen(false)

    return (
        <StyledBackdrop
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={close}
            zIndex={zIndex}
            style={style}
        >
            {children}
        </StyledBackdrop>
    )
}

export default Backdrop
