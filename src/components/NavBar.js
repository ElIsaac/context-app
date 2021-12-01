import React from 'react'
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
    let location = useLocation();
    console.log(location.pathname)
    return (
        <nav>
           

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">UseContext</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home </Link>
                        <Link className="nav-item nav-link" to="/Login" >Login</Link>
                        <Link className="nav-item nav-link" to="/About" >About</Link>
                    </div>
                </div>
            </nav>

        </nav>
    )
}
