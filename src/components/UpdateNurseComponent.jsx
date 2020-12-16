import React, { Component } from 'react'
import NurseService from '../services/NurseService';

class UpdateNurseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            nurseID: this.props.match.params.nurseID,
            name:'',
            cmt: '',
            birthday: '',
            address: '',
            level: '',
            experience: '',
            degree: '',
            major: '',
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changecmtHandler = this.changecmtHandler.bind(this);
        this.changebirthdayHandler = this.changebirthdayHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changelevelHandler = this.changelevelHandler.bind(this);
        this.changeexperienceHandler = this.changeexperienceHandler.bind(this);
        this.changedegreeHandler = this.changedegreeHandler.bind(this);
        this.changemajorHandler = this.changemajorHandler(this);
        this.saveOrUpdateNurse = this.saveOrUpdateNurse.bind(this);
    }

    componentDidMount(){

        // step 4
        if(this.state.nurseID === '_add'){
            return
        }else{
            NurseService.getNurseById(this.state.nurseID).then( (res) =>{
                let nurse = res.data;
                this.setState({
                    name: nurse.name,
                    cmt: nurse.cmt,
                    birthday: nurse.birthday,
                    address: nurse.address,
                    level: nurse.level,
                    experience: nurse.experience,
                    degree: nurse.degree,
                    major: nurse.major,
                });
            });
        }        
    }

    updateNurse = (e) => {
        e.preventDefault();
        let nurse = {name: this.state.name, cmt: this.state.cmt,
            birthday: this.state.birthday, address: this.state.address,level: this.state.level,
            experience: this.state.experience,degree: this.state.degree,major: this.state.major};
        console.log('nurse => ' + JSON.stringify(nurse));
        console.log('nurseID => ' + JSON.stringify(this.state.nurseID));
        NurseService.updateNurse(nurse, this.state.nurseID).then( res => {
            this.props.history.push('/nurses');
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
    changemajorHandler= (event) => {
        this.setState({major: event.target.value});
    }

    cancel(){
        this.props.history.push('/nurses');
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
                                            <label> level: </label>
                                            <input placeholder="level" name="level" className="form-control" 
                                                value={this.state.level} onChange={this.changelevelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> experience: </label>
                                            <input placeholder="experience" name="experience" className="form-control" 
                                                value={this.state.experience} onChange={this.changeexperienceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> degree: </label>
                                            <input placeholder="trinhdo" name="trinhdo" className="form-control" 
                                                value={this.state.degree} onChange={this.changedegreeHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateNurse}>Save</button>
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

export default UpdateNurseComponent
