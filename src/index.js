import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../src/index.css';
import Jokes from './Component/Jokes';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/jokes" component={Jokes}/>

        </Switch>
    </Router>
    , document.getElementById('root'));
