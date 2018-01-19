// function component() {
//     var elememt = document.createElement('div');
//     elememt.innerHTML = "hello ,welcome to react-webpack";
//     return elememt;
// }
// document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
import Error from './error';
import NavBar from './NavBar';

ReactDOM.render(
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={PageA}></Route>
                <Route path="/pageB" component={PageB}></Route>
                <Route path="/pageC" component={PageC}></Route>
                <Redirect from="/redirect" to="/pageB"></Redirect>
                <Route component={Error}></Route>
            </Switch>


        </div>
    </Router>,
    document.getElementById('app')
)