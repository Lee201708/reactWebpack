import React from 'react';
import {NavLink} from 'react-router-dom';
import './navBar.css';

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
                <NavLink exact to="/"
                         /*style={{color:"red"}}*/
                         className="bar">PageA</NavLink><br/>
                <NavLink to="/pageB">PageB</NavLink><br/>
                <NavLink to="/pageC">PageC</NavLink><br/>
                <NavLink to="/redirect">redirect</NavLink><br/>
                <NavLink to="/react">404</NavLink>
            </div>
        )
    }
}