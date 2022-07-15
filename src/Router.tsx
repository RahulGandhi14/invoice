import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./components/Home'))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={() => <p>Loading...</p>}>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router
