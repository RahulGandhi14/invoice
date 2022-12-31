import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Invoice = React.lazy(() => import('./pages/Invoice'))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={() => <p>Loading...</p>}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/invoice/:id" exact component={Invoice} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router
