import React from "react";
import { Link } from 'react-router-dom';
import { ImClipboard } from "react-icons/im";

function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-md">

            <Link className="nav-link" to='/'>
                <h1><ImClipboard />PatientDoc</h1>
            </Link>

            <div className="nav-menu">
                <Link className="nav-link" to='/'>
                    Home
                </Link>
            </div>
            <div>
                <Link className="nav-link" to='/patients'>
                    Patients
                </Link>
            </div>
            <div>
                <Link className="nav-link" to='/add-patient'>
                    New Patient
                </Link>
            </div>


        </nav>
    )
}

export default HeaderComponent;