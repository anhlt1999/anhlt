import React, { Component } from 'react'
import ExaminationService from '../services/ExaminationService'

class ListExaminationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                examinations: []
        }
        this.addExamination = this.addExamination.bind(this);
        this.editExamination = this.editExamination.bind(this);
        this.deleteExamination = this.deleteExamination.bind(this);
    }

    deleteExamination(examinationID){
        ExaminationService.deleteExamination(examinationID).then( res => {
            this.setState({examination: this.state.examinations.filter(examination => examination.examinationID !== examinationID)});
        });
    }
    viewExamination(examinationID){
        this.props.history.push(`/view-examination/${examinationID}`);
    }
    editExamination(examinationID){
        this.props.history.push(`/add-examination/${examinationID}`);
    }

    componentDidMount(){
        ExaminationService.getExaminations().then((res) => {
            this.setState({ examinations: res.data});
        });
    }

    addExamination(){
        this.props.history.push('/add-examination/_add');
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
                 <h2 className="text-center">Examinations List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addExamination}> Add Examination</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> doctorID</th>
                                    <th> nurseID</th>
                                    <th> patientID</th>
                                    <th> prescriptionID</th>
                                    <th> in</th>
                                    <th> out</th>
                                    <th> disease</th>
                                    <th> totalMoney</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.examinations.map(
                                        examination => 
                                        <tr key = {examination.examinationID}>
                                            <td> {examination.doctorID}</td>
                                            <td> {examination.nurseID}</td>
                                            <td> {examination.patientID}</td>
                                            <td> {examination.prescriptionID}</td>
                                             <td> {examination.in}</td>
                                             <td> {examination.out}</td>
                                             <td> {examination.disease}</td>
                                             <td> {examination.totalMoney}</td>

                                             <td>
                                                 <button onClick={ () => this.editExamination(examination.examinationID)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteExamination(examination.examinationID)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewExamination(examination.examinationID)} className="btn btn-info">View </button>
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

export default ListExaminationComponent
