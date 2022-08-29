import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light  py-3">
            <div className="container">
                <a className="navbar-brand fw-bold fs-2" href="/">Auterah-Watcher</a>
                <button className="navbar-toggler px-2 py-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/documentation">Doumentation</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">FAQs</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <div className="ms-auto mt-3 mt-lg-0">
                            <Link className="btn btn-sm px-3 btn-primary rounded-pill shadow-sm me-3" to="/login">Login</Link>
                            <Link className="btn btn-sm px-3 btn-light rounded-pill shadow-sm" to="/register">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar