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

const ActionButtons: React.FC = () => {
    return (
        <Wrapper>
            <Button type="button" variant="secondary">
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
