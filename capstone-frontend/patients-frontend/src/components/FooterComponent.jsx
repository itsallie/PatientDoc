import React from "react";

function FooterComponent() {
    return (
        <div className="main-footer">
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h4>PatientDoc Inc.</h4>
                        <ul className="list-unstyled">
                            <li>123 Street 12345</li>
                            <li>New York City</li>
                            <li>123-456-7890</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li>Primary Care</li>
                            <li>Annual CheckUp</li>
                            <li>Pains and Injuries</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Social</h4>
                        <ul className="list-unstyled">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} PatientDoc Inc. | PerScholas Capstone | Educational Purposes
                    </p>
                </div>
            </div>
        </div>
    )
}


// class FooterComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <div>
//                 <footer className="footer">
//                     <span className="text-muted">PerScholas Capstone Project 2021</span>
//                 </footer>
//             </div>
//         )
//     }
// }

export default FooterComponent;