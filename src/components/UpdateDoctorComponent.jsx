import React, { Component } from 'react'
import DoctorService from '../services/DoctorService';

class UpdateDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doctorID: this.props.match.params.doctorID,
            name: '',
            cmt: '',
            birthday: '',
            address: '',
            level: '',
            experience: '',
            degree: '',
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changecmtHandler = this.changecmtHandler.bind(this);
        this.changebirthdayHandler = this.changebirthdayHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changelevelHandler = this.changelevelHandler.bind(this);
        this.changeexperienceHandler = this.changeexperienceHandler.bind(this);
        this.changedegreeHandler = this.changedegreeHandler.bind(this);

        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }

    componentDidMount(){
        DoctorService.getDoctorById(this.state.doctorID).then( (res) =>{
            let doctor = res.data;
            this.setState({
                name: doctor.name,
                cmt: doctor.cmt,
                birthday: doctor.birthday,
                address: doctor.address,
                level: doctor.level,
                experience: doctor.experience,
                degree: doctor.degree,
            });
        });
    }

    updateDoctor = (e) => {
        e.preventDefault();
        let doctor = {name: this.state.name, cmt: this.state.cmt,
            birthday: this.state.birthday, address: this.state.address,level: this.state.level,
            experience: this.state.experience,degree: this.state.degree};
        console.log('doctor => ' + JSON.stringify(doctor));
        console.log('doctorID => ' + JSON.stringify(this.state.doctorID));
        DoctorService.updateDoctor(doctor, this.state.doctorID).then( res => {
            this.props.history.push('/doctors');
        });
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
    changelevelHandler= (event) => {
        this.setState({level: event.target.value});
    }
    changeexperienceHandler= (event) => {
        this.setState({experience: event.target.value});
    }
    changedegreeHandler= (event) => {
        this.setState({degree: event.target.value});
    }

    cancel(){
        this.props.history.push('/doctors');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update doctor</h3>
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
                                            <label> level: </label>
                                            <input placeholder="bacnghe" name="bacnghe" className="form-control" 
                                                value={this.state.level} onChange={this.changelevelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> experience: </label>
                                            <input placeholder="thamnien" name="thamnien" className="form-control" 
                                                value={this.state.experience} onChange={this.changeexperienceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> degree: </label>
                                            <input placeholder="trinhdo" name="trinhdo" className="form-control" 
                                                value={this.state.degree} onChange={this.changedegreeHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateDoctor}>Save</button>
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

export default UpdateDoctorComponent
