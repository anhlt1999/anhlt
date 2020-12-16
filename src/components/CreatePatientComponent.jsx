import React, { Component } from 'react'
import PatientService from '../services/PatientService';

class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            patientID: this.props.match.params.patientID,
            name:'',
            cmt: '',
            birthday: '',
            address: '',
            phone: '',
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changecmtHandler = this.changecmtHandler.bind(this);
        this.changebirthdayHandler = this.changebirthdayHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changephoneHandler = this.changephoneHandler.bind(this);

        this.saveOrUpdatePatient = this.saveOrUpdatePatient.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.patientID === '_add'){
            return
        }else{
            PatientService.getPatientById(this.state.patientID).then( (res) =>{
                let patient = res.data;
                this.setState({
                    name: patient.name,
                    cmt: patient.cmt,
                    birthday: patient.birthday,
                    address: patient.address,
                    phone: patient.phone,
                });
            });
        }        
    }
    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name, cmt: this.state.cmt,
            birthday: this.state.birthday, address: this.state.address,phone: this.state.phone,};
        console.log('patient => ' + JSON.stringify(patient));

        // step 5
        if(this.state.patientID === '_add'){
            PatientService.createPatient(patient).then(res =>{
                this.props.history.push('/patients');
            });
        }else{
            PatientService.updatePatient(patient, this.state.patientID).then( res => {
                this.props.history.push('/patients');
            });
        }
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changecmtHandler= (event) => {
        this.setState({cmt: event.target.value});
    }
    changebirthdayHandler= (event) => {
        this.setState({birthday: event.target.value});
    }
    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changephoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }


    cancel(){
        this.props.history.push('/patients');
    }

    getTitle(){
        if(this.state.patientID === '_add'){
            return <h3 className="text-center">Add patient</h3>
        }else{
            return <h3 className="text-center">Update patient</h3>
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
                                            <label> Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> cmt: </label>
                                            <input placeholder="cmt" name="cmt" className="form-control" 
                                                value={this.state.cmt} onChange={this.changecmtHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> birthday: </label>
                                            <input placeholder="birthday" name="birthday" className="form-control" 
                                                value={this.state.birthday} onChange={this.changebirthdayHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> address: </label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> phone: </label>
                                            <input placeholder="phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changephoneHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePatient}>Save</button>
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

export default CreatePatientComponent
