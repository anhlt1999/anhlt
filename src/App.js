import React from 'react';
import './style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListDoctorComponent from './components/ListDoctorComponent';
import ListNurseComponent from './components/ListNurseComponent';
import ListExaminationComponent from './components/ListExaminationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateDoctorComponent from './components/CreateDoctorComponent';
import CreateNurseComponent from './components/CreateNurseComponent';
import CreateExaminationComponent from './components/CreateExaminationComponent';
import UpdateDoctorComponent from './components/UpdateDoctorComponent';
import UpdateNurseComponent from './components/UpdateNurseComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import UpdateExaminationComponent from './components/UpdateExaminationComponent';
import CreatePatientComponent from './components/CreatePatientComponent';
import ListPatientComponent from './components/ListPatientComponent';
import ListPrescriptionComponent from './components/ListPrescriptionComponent';
import UpdatePrescriptionComponent from './components/UpdatePrescriptionComponent';
import CreatePrescriptionComponent from './components/CreatePrescriptionComponent';

import ViewDoctorComponent from './components/ViewDoctorComponent';
import home from './components/home';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {home}></Route>
                          <Route path = "/nurses" component = {ListNurseComponent}></Route>
                          <Route path = "/doctors" component = {ListDoctorComponent}></Route>
                          <Route path = "/examinations" component = {ListExaminationComponent}></Route>
                          <Route path = "/patients" component = {ListPatientComponent}></Route>
                          <Route path = "/prescriptions" component = {ListPrescriptionComponent}></Route>
                          <Route path = "/add-doctor/:doctorID" component = {CreateDoctorComponent}></Route>
                          <Route path = "/add-examination/:examinationID" component = {CreateExaminationComponent}></Route>
                          <Route path = "/add-patient/:patientID" component = {CreatePatientComponent}></Route>
                          <Route path = "/add-prescription/:prescriptionID" component = {CreatePrescriptionComponent}></Route>
                          <Route path = "/add-nurse/:nurseID" component = {CreateNurseComponent}></Route>
                          <Route path = "/view-doctor/:doctorID" component = {ViewDoctorComponent}></Route>
                          <Route path = "/update-doctor/:doctorID" component = {UpdateDoctorComponent}></Route>
                          <Route path = "/update-nurse/:nurseID" component = {UpdateNurseComponent}></Route>
                          <Route path = "/update-examination/:examinationID" component = {UpdateExaminationComponent}></Route>
                          <Route path = "/update-patient/:patientID" component = {UpdatePatientComponent}></Route>
                          <Route path = "/update-prescription/:prescriptionID" component = {UpdatePrescriptionComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
