import React from 'react'
import styled from 'styled-components'
import Button from '../styled/Button'

const FlexContainer = styled.div`
    display: flex;
`

const Wrapper = styled(FlexContainer)`
    margin-top: 2rem;
    justify-content: space-between;
`

type ActionButtonProps = {
    setOpen: (open: boolean) => void
}

const ActionButtons: React.FC<ActionButtonProps> = ({ setOpen }) => {
    const close = () => setOpen(false)

    return (
        <Wrapper>
            <Button type="button" variant="secondary" onClick={close}>
                Discard
            </Button>
            <FlexContainer style={{ gap: '0.5rem' }}>
                <Button type="button" variant="tertiary">
                    Save as draft
                </Button>
                <Button type="submit">Save & Send</Button>
            </FlexContainer>
        </Wrapper>
    )
}

export default ActionButtons
