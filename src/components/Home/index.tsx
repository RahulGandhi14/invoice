import styled from 'styled-components'
import App from '../../App'
import Header from './Header'

const Wrapper = styled.div`
    width: 100%;
    max-width: 45.625rem;
    height: 100%;
    margin: auto;
`

const Home = () => {
    return (
        <App>
            <Wrapper>
                <Header />
            </Wrapper>
        </App>
    )
}

export default Home
