import React, { Component } from 'react'
import DoctorService from '../services/DoctorService'

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                doctors: []
        }
        this.addDoctor = this.addDoctor.bind(this);
        this.editDoctor = this.editDoctor.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
    }

    deleteDoctor(doctorID){
        DoctorService.deleteDoctor(doctorID).then( res => {
            this.setState({doctor: this.state.doctors.filter(doctor => doctor.doctorID !== doctorID)});
        });
    }
    viewDoctor(doctorID){
        this.props.history.push(`/view-doctor/${doctorID}`);
    }
    editDoctor(doctorID){
        this.props.history.push(`/add-doctor/${doctorID}`);
    }

    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data});
        });
    }

    addDoctor(){
        this.props.history.push('/add-doctor/_add');
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
                 <h2 className="text-center">Doctors List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDoctor}> Add Doctor</button>
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
                                    <th> Bac nghe</th>
                                    <th> Tham nien</th>
                                    <th> Trinh do</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctors.map(
                                        doctor => 
                                        <tr key = {doctor.doctorID}>
                                             <td> {doctor.name}</td>
                                             <td> {doctor.cmt}</td>
                                             <td> {doctor.birthday}</td>
                                             <td> {doctor.address}</td>
                                             <td> {doctor.level}</td>
                                             <td> {doctor.experience}</td>
                                             <td> {doctor.degree}</td>
                                             <td>
                                                 <button onClick={ () => this.editDoctor(doctor.doctorID)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDoctor(doctor.doctorID)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDoctor(doctor.doctorID)} className="btn btn-info">View </button>
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

export default HomeComponent
