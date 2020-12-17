import React, { Component } from 'react'
import PatientService from '../services/PatientService'

class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }

    deletePatient(patientID){
        PatientService.deletePatient(patientID).then( res => {
            this.setState({patient: this.state.patients.filter(patient => patient.patientID !== patientID)});
        });
    }
    viewPatient(patientID){
        this.props.history.push(`/view-patient/${patientID}`);
    }
    editPatient(patientID){
        this.props.history.push(`/add-patient/${patientID}`);
    }

    componentDidMount(){
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data});
        });
    }

    addPatient(){
        this.props.history.push('/add-patient/_add');
    }

    render() {
        return (
            
            <div>
                <div id = "menu_bot">
                <ul>
				<li><a href="doctors" title  ="Trang chủ" class ="active" > Trang chủ</a></li>
				<li><a href="examinations" title  ="Lên lịch"> Lên lịch </a></li>
				<li><a href="doctors" title  ="Bác sỹ"> Bác sỹ </a></li>
                <li><a href="nurses" title  ="Y tá"> Y tá </a></li>
				<li><a href="patients" title  ="Bệnh nhân"> Bệnh nhân </a></li>
				<li><a href="prescriptions" title  ="Thuốc"> Thuốc </a></li>
				<li><a href="stat" title  ="Thống kê"> Thống kê </a></li>
			</ul>
		</div>
                 <h2 className="text-center">Patients List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPatient}> Add Patient</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> CMT</th>
                                    <th> Birthday</th>
                                    <th> Address</th>
                                    <th> Phone</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.patientID}>
                                             <td> {patient.name}</td>
                                             <td> {patient.cmt}</td>
                                             <td> {patient.birthday}</td>
                                             <td> {patient.address}</td>
                                             <td> {patient.phone}</td>
                                             <td>
                                                 <button onClick={ () => this.editPatient(patient.patientID)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePatient(patient.patientID)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPatient(patient.patientID)} className="btn btn-info">View </button>
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

export default ListPatientComponent
