import { AnimatePresence } from 'framer-motion'
import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Invoice = React.lazy(() => import('./pages/Invoice'))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={() => <p>Loading...</p>}>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/invoice/:id" exact component={Invoice} />
                    </Switch>
                </AnimatePresence>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router
