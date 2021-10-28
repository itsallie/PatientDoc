import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import AddPatientComponent from './components/AddPatientComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPatientsComponent from './components/ListPatientsComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import ViewPatientComponent from './components/ViewPatientComponent';




function App() {
  return (
    <div className="page-container">
      <Router>
        <HeaderComponent />
        <div className="container content-wrap">
          <Switch>
            <Route path="/" exact component={ListPatientsComponent}></Route>
            <Route path="/patients" component={ListPatientsComponent}></Route>
            <Route path="/add-patient" component={AddPatientComponent}></Route>
            <Route path="/update-patient/:id" component={UpdatePatientComponent}></Route>
            <Route path="/view-patient/:id" component={ViewPatientComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
