import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <a className="text-light navbar-brand" href="#">
                            Election Commission of India
                        </a> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/table" className="nav-link active">Upcoming</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    More
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Contact
                                        </a>
                                    </li>
                                    {/* <li>
                                        <hr className="dropdown-divider" />
                                    </li> */}
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <div className="d-flex" style={{ height: "40px" }} role="search">
                            <img src="https://eci.gov.in/uploads/monthly_2022_06/logo.png.d0e6aee2d64193769bffbc6e720bbe96.png"
                                className="d-flex" alt="Sample image" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
// export default Navbar