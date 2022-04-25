import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Book Store</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/categories"}>Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                        </ul>
                        <Link className="btn btn-outline-info mx-2" to={"/login"}>Login</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header;
