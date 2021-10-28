import React, { Component } from "react";
import PatientService from "../services/PatientService";


class ViewPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patient: {}
        }

    }

    componentDidMount() {
        PatientService.getPatientById(this.state.id).then(res => {
            this.setState({ patient: res.data });
        })
    }

    render() {
        return (
            <div className="view">
                <div className=" col-md-6 offset-md-3 view-container">

                    <h3 className="text-center">View Patient Records</h3>
                    <div className="card-body x-5">
                        <div className="row">
                            <label>Date of Visit: </label>
                            <div>
                                {this.state.patient.date}
                            </div>
                        </div>
                        <div className="row">
                            <label>Patient First Name: </label>
                            <div>
                                {this.state.patient.firstName}
                            </div>
                        </div>
                        <div className="row">
                            <label>Patient Last Name: </label>
                            <div>
                                {this.state.patient.lastName}
                            </div>
                        </div>
                        <div className="row">
                            <label>Patient Birthday: </label>
                            <div>
                                {this.state.patient.birthDate}
                            </div>
                        </div>
                        <div className="row">
                            <label>Patient Reason for Visit: </label>
                            <div>
                                {this.state.patient.reasonVisit}
                            </div>
                        </div>
                        <div className="row">
                            <label>Patient Email: </label>
                            <div>
                                {this.state.patient.email}
                            </div>
                        </div>
                        <div className="row">
                            <label>Patient Phone Number: </label>
                            <div>
                                {this.state.patient.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewPatientComponent;