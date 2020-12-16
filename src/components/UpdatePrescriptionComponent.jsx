import React, { Component } from 'react'
import PrescriptionService from '../services/PrescriptionService';

class UpdatePrescriptionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prescriptionID: this.props.match.params.prescriptionID,
            name: '',
            price: '',
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);

        this.saveOrUpdatePrescription = this.saveOrUpdatePrescription.bind(this);
    }

    componentDidMount(){
        PrescriptionService.getPrescriptionById(this.state.prescriptionID).then( (res) =>{
            let prescription = res.data;
            this.setState({
                name: prescription.name,
                price: prescription.price,
            });
        });
    }

    updatePrescription = (e) => {
        e.preventDefault();
        let prescription = {name: this.state.name, price: this.state.price};
        console.log('prescription => ' + JSON.stringify(prescription));
        console.log('prescriptionID => ' + JSON.stringify(this.state.prescriptionID));
        PrescriptionService.updatePrescription(prescription, this.state.prescriptionID).then( res => {
            this.props.history.push('/prescriptions');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update prescription</h3>
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
                                       
                                        <button className="btn btn-success" onClick={this.updatePrescription}>Save</button>
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

export default UpdatePrescriptionComponent
