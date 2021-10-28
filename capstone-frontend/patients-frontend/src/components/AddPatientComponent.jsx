import React, { Component } from "react";
import PatientService from "../services/PatientService";

class AddPatientComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            reasonVisit: '',
            email: '',
            phone: ''
        }

        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.changeReasonVisitHandler = this.changeReasonVisitHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);

        this.savePatient = this.savePatient.bind(this);

    }

    savePatient = (e) => {
        e.preventDefault();

        let patient = { date: this.state.date, firstName: this.state.firstName, lastName: this.state.lastName, birthDate: this.state.birthDate, reasonVisit: this.state.reasonVisit, email: this.state.email, phone: this.state.phone };
        console.log('patient =>' + JSON.stringify(patient));

        PatientService.addPatient(patient).then(res => {
            this.props.history.push('/patients');
        });

    }

    changeDateHandler(event) {
        this.setState({ date: event.target.value });
    }
    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value });
    }
    changeBirthDateHandler(event) {
        this.setState({ birthDate: event.target.value });
    }
    changeReasonVisitHandler(event) {
        this.setState({ reasonVisit: event.target.value });
    }
    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }
    changePhoneHandler(event) {
        this.setState({ phone: event.target.value });
    }

    cancel() {
        this.props.history.push('/patients');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Add Patient</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Date: </label>
                                        <input type="date" name="date" className="form-control" value={this.state.date} onChange={this.changeDateHandler} />
                                    </div>
                                    <div>
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div>
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Birthday: </label>
                                        <input type="date" name="birthDate" className="form-control" value={this.state.birthDate} onChange={this.changeBirthDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Reason for Visit: </label>
                                        <textarea name="reasonVisit" className="form-control" value={this.state.reasonVisit} onChange={this.changeReasonVisitHandler}>Enter text here...</textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail: </label>
                                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number: (ex. xxx-xxx-xxxx) </label>
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" value={this.state.phone} onChange={this.changePhoneHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.savePatient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default AddPatientComponent;