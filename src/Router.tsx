import { AnimatePresence } from 'framer-motion'
import { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import InvoicePage from './pages/Invoice'

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={() => <p>Loading...</p>}>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route
                            path="/invoice/:id"
                            exact
                            component={InvoicePage}
                        />
                    </Switch>
                </AnimatePresence>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router
