import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

import HomePage from './pages/Home'
import InvoicePage from './pages/Invoice'

const RoutesWithAnimation = () => {
    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <Route path="/" exact component={HomePage} />
                <Route path="/invoice/:id" exact component={InvoicePage} />
            </Switch>
        </AnimatePresence>
    )
}

const Router = () => {
    return (
        <BrowserRouter>
            <RoutesWithAnimation />
        </BrowserRouter>
    )
}

export default Router
