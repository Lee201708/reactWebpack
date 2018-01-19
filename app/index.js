// function component() {
//     var elememt = document.createElement('div');
//     elememt.innerHTML = "hello ,welcome to react-webpack";
//     return elememt;
// }
// document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import dynamic from 'dva/dynamic'
import Error from './error';
import Siders from './component/siders/sider';


ReactDOM.render(
    <Router history={HashRouter}>
        <Switch>
            <Route exact path='/' component={Siders}></Route>
            <Redirect from="/redirect" to="/pageB"></Redirect>
            <Route component={Error}></Route>
        </Switch>
    </Router>,
    document.getElementById('app')
)