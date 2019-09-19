import React from 'react';
import { NavLink } from "react-router-dom";

    function Navbar() {
        return(
            <div>
                <nav className="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <NavLink to="./" className="navbar-item">
                        <h2>dfhfdjhg</h2>
                        </NavLink>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                        <NavLink to="./" className="navbar-item">
                            Home
                        </NavLink>

                        <NavLink to="/main" className="navbar-item">
                            Main
                        </NavLink>

                        <NavLink to="/second" className="navbar-item">
                            Second
                        </NavLink>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default Navbar;