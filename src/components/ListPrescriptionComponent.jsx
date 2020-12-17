import React, { Component } from 'react'
import PrescriptionService from '../services/PrescriptionService'

class ListPrescriptionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                prescriptions: []
        }
        this.addPrescription = this.addPrescription.bind(this);
        this.editPrescription = this.editPrescription.bind(this);
        this.deletePrescription = this.deletePrescription.bind(this);
    }

    deletePrescription(prescriptionID){
        PrescriptionService.deletePrescription(prescriptionID).then( res => {
            this.setState({prescription: this.state.prescriptions.filter(prescription => prescription.prescriptionID !== prescriptionID)});
        });
    }
    viewPrescription(prescriptionID){
        this.props.history.push(`/view-prescription/${prescriptionID}`);
    }
    editPrescription(prescriptionID){
        this.props.history.push(`/add-prescription/${prescriptionID}`);
    }

    componentDidMount(){
        PrescriptionService.getPrescriptions().then((res) => {
            this.setState({ prescriptions: res.data});
        });
    }

    addPrescription(){
        this.props.history.push('/add-prescription/_add');
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
                 <h2 className="text-center">Prescriptions List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPrescription}> Add Prescription</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> prescriptionID</th>
                                    <th> name</th>
                                    <th> price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.prescriptions.map(
                                        prescription => 
                                        <tr key = {prescription.prescriptionID}>
                                            <td> {prescription.prescriptionID}</td>
                                             <td> {prescription.name}</td>
                                             <td> {prescription.price}</td>

                                             <td>
                                                 <button onClick={ () => this.editPrescription(prescription.prescriptionID)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePrescription(prescription.prescriptionID)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPrescription(prescription.prescriptionID)} className="btn btn-info">View </button>
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

export default ListPrescriptionComponent
