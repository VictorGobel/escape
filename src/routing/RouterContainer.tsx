import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Mailing } from "../pages/Mailing"
import { SiteRouterContainer } from "./SiteRouterContainer"

export const RouterContainer = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/mailing" component={Mailing} />
                <Route path="/" component={SiteRouterContainer} />
            </Switch>
        </Router>
    )
}
