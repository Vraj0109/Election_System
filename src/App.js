import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Table } from "./Elec_Table";
import './Landing_css.css';
import { Navbar } from "./Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  return (
    <div className="App">
      {
        <Router>
          <Routes>
            <Route path="/table" element={<Table />}>
            </Route>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
