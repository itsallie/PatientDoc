import React, { Component } from "react";
import { ImClipboard } from "react-icons/im";


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="header-bg">
                <header>
                    <nav className="navbar navbar-expand-md ">
                        <div className="head">
                            <h1 className="mt-3"><ImClipboard />PatientDoc</h1>
                        </div>
                    </nav>
                </header>
            </div >
        )
    }
}

export default HeaderComponent;