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
    editInvoice: boolean
}

const ActionButtons: React.FC<ActionButtonProps> = ({
    setOpen,
    editInvoice,
}) => {
    const close = () => setOpen(false)

    return (
        <Wrapper>
            <Button type="button" variant="secondary" onClick={close}>
                Discard
            </Button>
            <FlexContainer style={{ gap: '0.5rem' }}>
                {editInvoice ? null : (
                    <Button type="button" variant="tertiary">
                        Save as draft
                    </Button>
                )}
                <Button type="submit">
                    {editInvoice ? 'Save Changes' : 'Save & Send'}
                </Button>
            </FlexContainer>
        </Wrapper>
    )
}

export default ActionButtons
