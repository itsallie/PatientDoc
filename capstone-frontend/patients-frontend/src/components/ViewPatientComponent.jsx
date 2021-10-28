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

    back() {
        this.props.history.push('/patients');
    }

    render() {
        return (
            <div className="card mt-3 ">
                <div className=" card-body col-md-6 offset-md-3">

                    <h3 className="text-center display-6">View {this.state.patient.firstName + " " + this.state.patient.lastName + "'s"} Records</h3>
                    <div className="card-body x-5">
                        <div className="row">
                            <label className="fw-bold">Date of Visit: </label>
                            <div>
                                {this.state.patient.date}
                            </div>
                        </div>
                        <div className="row">
                            <label className="fw-bold">First Name: </label>
                            <div>
                                {this.state.patient.firstName}
                            </div>
                        </div>
                        <div className="row">
                            <label className="fw-bold">Last Name: </label>
                            <div>
                                {this.state.patient.lastName}
                            </div>
                        </div>
                        <div className="row">
                            <label className="fw-bold">Birthday: </label>
                            <div>
                                {this.state.patient.birthDate}
                            </div>
                        </div>
                        <div className="row">
                            <label className="fw-bold">Reason for Visit: </label>
                            <div>
                                {this.state.patient.reasonVisit}
                            </div>
                        </div>
                        <div className="row">
                            <label className="fw-bold">Email: </label>
                            <div>
                                {this.state.patient.email}
                            </div>
                        </div>
                        <div className="row">
                            <label className="fw-bold">Phone Number: </label>
                            <div>
                                {this.state.patient.phone}
                            </div>
                        </div>
                        <button className="btn btn-warning mt-3" onClick={this.back.bind(this)}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewPatientComponent;