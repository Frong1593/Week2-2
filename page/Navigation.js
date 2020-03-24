import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import {ThemeContext} from  '../component/context/ThemeContext'
 
export class Navigation extends Component{
    static contextType = ThemeContext
    render(){

        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic=navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/HOC">
                            HOC
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Ref">
                            Ref
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Context">
                            Context
                        </NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}