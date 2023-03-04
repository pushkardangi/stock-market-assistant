import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import FunZone from "../pages/FunZone";

import './css/Navbar.css';
import './css/Components.css';

function Navbar() {
  return (
    <>

        <div className="font-medium text-center text-purple-700 border-b-2 border-purple-500">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <Link to="/" className="nav-link inline-block p-4" >Dashboard</Link>
                </li>
                <li className="mr-2">
                    <Link to="/funZone" className="nav-link inline-block p-4">Fun Zone</Link>
                </li>
            </ul>
        </div>

        
        <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="/funZone" element={<FunZone />} />
        </Routes>
        

    </>
  )
}

export default Navbar;
