import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row bg-info">
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <nav
                                            className="navbar navbar-expand-lg navbar-dark bg-info">
                                            <NavLink className="navbar-brand" to="/"> Logo</NavLink>
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>

                                            <div
                                                className="collapse navbar-collapse"
                                                id="navbarSupportedContent">
                                                <ul className="navbar-nav mr-auto">
                                                    <li className="nav-item">
                                                        <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink exact activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink exact activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
                                                    </li>
                                                </ul>
                                                <form className="form-inline my-2 my-lg-0">
                                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                                                </form>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Navbar;