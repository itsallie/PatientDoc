import React, { Component } from "react";
import PatientService from "../services/PatientService";

class ListPatientsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patients: []
        }

        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);

    }

    viewPatient(id) {
        this.props.history.push(`/view-patient/${id}`);
    }

    deletePatient(id) {
        PatientService.deletePatient(id).then(res => {
            this.setState({
                patients: this.state.patients.filter(patient => patient.id !== id)
            });
        });
    }

    editPatient(id) {
        this.props.history.push(`/update-patient/${id}`);
    }

    componentDidMount() {
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data });
        });
    }

    addPatient() {
        this.props.history.push('/add-patient');
    }


    render() {
        return (
            <div>
                <h2 className="text-center display-4 fw-bold">Patients List</h2>
                <div className="row">
                    <button className="btn btn-primary btn-sm" onClick={this.addPatient}>Add Patient</button>
                </div>
                <div className="row mt-3">
                    <table className="table table-responsive table-bordered table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>Date</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Birthday</th>
                                <th>Reason for Visit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {
                                this.state.patients.map(
                                    patient =>
                                        <tr key={patient.id}>
                                            <td> {patient.date}</td>
                                            <td> {patient.firstName}</td>
                                            <td> {patient.lastName}</td>
                                            <td> {patient.birthDate}</td>
                                            <td> {patient.reasonVisit}</td>
                                            <td>
                                                <button onClick={() => this.viewPatient(patient.id)} className="btn btn-primary">View</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.editPatient(patient.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletePatient(patient.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListPatientsComponent;