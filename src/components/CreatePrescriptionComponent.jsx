import React, { Component } from 'react'
import PrescriptionService from '../services/PrescriptionService';

class CreatePrescriptionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            prescriptionID: this.props.match.params.prescriptionID,
            name:'',
            price: '',
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changericeHandler = this.changepriceHandler.bind(this);
        this.saveOrUpdatePrescription = this.saveOrUpdatePrescription.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.prescriptionID === '_add'){
            return
        }else{
            PrescriptionService.getPrescriptionById(this.state.prescriptionID).then( (res) =>{
                let prescription = res.data;
                this.setState({
                    name: prescription.name,
                    price: prescription.price,
                });
            });
        }        
    }
    saveOrUpdatePrescription = (e) => {
        e.preventDefault();
        let prescription = {name: this.state.name, price: this.state.price};
        console.log('prescription => ' + JSON.stringify(prescription));

        // step 5
        if(this.state.prescriptionID === '_add'){
            PrescriptionService.createPrescriptions(prescription).then(res =>{
                this.props.history.push('/prescriptions');
            });
        }else{
            PrescriptionService.updatePrescription(prescription, this.state.prescriptionID).then( res => {
                this.props.history.push('/prescriptions');
            });
        }
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changepriceHandler= (event) => {
        this.setState({price: event.target.value});
    }


    cancel(){
        this.props.history.push('/prescriptions');
    }

    getTitle(){
        if(this.state.patientID === '_add'){
            return <h3 className="text-center">Add prescription</h3>
        }else{
            return <h3 className="text-center">Update prescription</h3>
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
                                            <label> price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changepriceHandler}/>
                                        </div>
                                        
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePrescription}>Save</button>
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

export default CreatePrescriptionComponent
