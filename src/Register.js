import React, { useState } from "react";
import {Navbar} from "./Navbar";
import Footer from "./Footer"
import Table from "./Elec_Table"
import {Link} from "react-router-dom"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <figure className="text-center">
                                        <h1 className="text-center">Your vote, Your voice.</h1>
                                    </figure>

                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Welcome, Please Register to Continue.</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid username" />
                                    {/* <!-- <label className="form-label" htmlFor="form3Example3"></label> --> */}
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    {/* <!-- <label className="form-label" htmlFor="form3Example4">Password</label> --> */}
                                </div>

                                {/* <!-- Confirm Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example5" className="form-control form-control-lg"
                                        placeholder="Confirm password" />
                                    {/* <!-- <label className="form-label" htmlFor="form3Example4">Password</label> --> */}
                                </div>

                                {/* <!-- VoterID input --> */}
                                <div className="form-outline mb-3">
                                    <input type="text" id="form3Example6" className="form-control form-control-lg"
                                        placeholder="Enter Valid VoterID" />
                                    {/* <!-- <label className="form-label" htmlFor="form3Example4">Password</label> --> */}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                      
                                        e={{ paddingleft: "2.5rem", paddingright: " 2.5rem" }}>
                                        Register Now
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Have an account already?
                                    {/* <button className="link-btn link-danger" >Register here.</button> */}
                                    <Link to="/" className="link-danger">Login Here</Link>
                                        {/* <Link to="/register">hy</Link> */}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer/>
            </section >
        </div>
    )
}