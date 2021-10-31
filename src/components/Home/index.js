import styled from 'styled-components'
import App from '../../App'

const Wrapper = styled.div`
    width: 100%;
    max-width: 45.625rem;
    height: 100%;
    margin: auto;
`

const Home = () => {
    return (
        <App>
            <Wrapper>Hello Brother</Wrapper>
        </App>
    )
}

export default Home
