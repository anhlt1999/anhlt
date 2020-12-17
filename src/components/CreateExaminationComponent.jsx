import React, { Component } from 'react'
import ExaminationService from '../services/ExaminationService';

class CreateExaminationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            examinationID: this.props.match.params.examinationID,
            doctorID:'',
            nurseID: '',
            patientID: '',
            prescriptionID: '',
            in: '',
            out: '',
            disease: '',
            totalMoney: '',
        }
        this.changedoctorIDHandler = this.changedoctorIDHandler.bind(this);
        this.changenurseIDHandler = this.changenurseIDHandler.bind(this);
        this.changepatientIDHandler = this.changepatientIDHandler.bind(this);
        this.changeprescriptionIDHandler = this.changeprescriptionIDHandler.bind(this);
        this.changeinHandler = this.changeinHandler.bind(this);
        this.changeoutHandler = this.changeoutHandler.bind(this);
        this.changediseaseHandler = this.changediseaseHandler.bind(this);
        this.changetotalMoneyHandler = this.changetotalMoneyHandler.bind(this);
        this.saveOrUpdateExamination = this.saveOrUpdateExamination.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.examinationID === '_add'){
            return
        }else{
            ExaminationService.getExaminationById(this.state.examinationID).then( (res) =>{
                let examination = res.data;
                this.setState({
                    doctorID: examination.doctorID,
                    nurseID: examination.nurseID,
                    patientID: examination.patientID,
                    prescriptionID: examination.prescriptionID,
                    in: examination.in,
                    out: examination.out,
                    disease: examination.disease,
                    totalMoney: examination.totalMoney,
                });
            });
        }        
    }
    saveOrUpdateExamination = (e) => {
        e.preventDefault();
        let examination = {doctorID: this.state.doctorID, nurseID: this.state.nurseID,
            patientID: this.state.patientID, prescriptionID: this.state.prescriptionID,in: this.state.in,
            out: this.state.out,disease: this.state.disease, totalMoney: this.state.totalMoney};
        console.log('examimation => ' + JSON.stringify(examination));

        // step 5
        if(this.state.examinationID === '_add'){
            ExaminationService.createExaminations(examination).then(res =>{
                this.props.history.push('/examimations');
            });
        }else{
            ExaminationService.updateExamination(examination, this.state.examinationID).then( res => {
                this.props.history.push('/examimations');
            });
        }
    }
    
    changedoctorIDHandler= (event) => {
        this.setState({doctorID: event.target.value});
    }

    changenurseIDHandler= (event) => {
        this.setState({nurseID: event.target.value});
    }
    changepatientIDHandler= (event) => {
        this.setState({patientID: event.target.value});
    }
    changeprescriptionIDHandler= (event) => {
        this.setState({prescriptionID: event.target.value});
    }
    changeinHandler= (event) => {
        this.setState({in: event.target.value});
    }
    changeoutHandler= (event) => {
        this.setState({out: event.target.value});
    }
    changediseaseHandler= (event) => {
        this.setState({disease: event.target.value});
    }
    changetotalMoneyHandler= (event) => {
        this.setState({totalMoney: event.target.value});
    }


    cancel(){
        this.props.history.push('/examimations');
    }

    getTitle(){
        if(this.state.examinationID === '_add'){
            return <h3 className="text-center">Add examimation</h3>
        }else{
            return <h3 className="text-center">Update examimation</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        
                                        <div className = "form-group">
                                            <label> doctorID: </label>
                                            <input placeholder="doctorID" name="doctorID" className="form-control" 
                                                value={this.state.nurseID} onChange={this.changedoctorIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> nurseID: </label>
                                            <input placeholder="nurseID" name="nurseID" className="form-control" 
                                                value={this.state.nurseID} onChange={this.changenurseIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> patientID: </label>
                                            <input placeholder="patientID" name="patientID" className="form-control" 
                                                value={this.state.patientID} onChange={this.changepatientIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> prescriptionID: </label>
                                            <input placeholder="prescriptionID" name="prescriptionID" className="form-control" 
                                                value={this.state.prescriptionID} onChange={this.changeprescriptionIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> in: </label>
                                            <input placeholder="in" name="in" className="form-control" 
                                                value={this.state.in} onChange={this.changeinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> out: </label>
                                            <input placeholder="out" name="out" className="form-control" 
                                                value={this.state.out} onChange={this.changeoutHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> disease: </label>
                                            <input placeholder="disease" name="disease" className="form-control" 
                                                value={this.state.disease} onChange={this.changediseaseHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> totalMoney: </label>
                                            <input placeholder="totalMoney" name="totalMoney" className="form-control" 
                                                value={this.state.totalMoney} onChange={this.changetotalMoneyHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateExamination}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateExaminationComponent
