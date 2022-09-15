import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import { PAGES } from './pages';

export const SiteRouterContainer = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                {Object.values(PAGES).map(({ component, path }) => (
                    <Route exact key={path} path={path} component={component}></Route>
                ))}
            </Switch>
        </Router>
    );
};
