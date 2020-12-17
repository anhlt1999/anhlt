import React, { Component } from 'react'
import NurseService from '../services/NurseService'

class ListNurseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                nurses: []
        }
        this.addNurse = this.addNurse.bind(this);
        this.editNurse = this.editNurse.bind(this);
        this.deleteNurse = this.deleteNurse.bind(this);
    }

    deleteNurse(nurseID){
        NurseService.deleteNurse(nurseID).then( res => {
            this.setState({nurse: this.state.nurses.filter(nurse => nurse.nurseID !== nurseID)});
        });
    }
    viewNurse(nurseID){
        this.props.history.push(`/view-nurse/${nurseID}`);
    }
    editNurse(nurseID){
        this.props.history.push(`/add-nurse/${nurseID}`);
    }

    componentDidMount(){
        NurseService.getNurses().then((res) => {
            this.setState({ nurses: res.data});
        });
    }

    addNurse(){
        this.props.history.push('/add-nurse/_add');
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
        <h2 className="text-center">Nurses List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNurse}> Add Nurse</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> IDnurse</th>
                                    <th> Name</th>
                                    <th> CMT</th>
                                    <th> Birthday</th>
                                    <th> Address</th>
                                    <th> Bac nghe</th>
                                    <th> Tham nien</th>
                                    <th> Trinh do</th>
                                    <th> major</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.nurses.map(
                                        nurse => 
                                        <tr key = {nurse.nurseID}>
                                            <td>{nurse.nurseID}</td>
                                             <td> {nurse.name}</td>
                                             <td> {nurse.cmt}</td>
                                             <td> {nurse.birthday}</td>
                                             <td> {nurse.address}</td>
                                             <td> {nurse.level}</td>
                                             <td> {nurse.experience}</td>
                                             <td> {nurse.degree}</td>
                                             <td> {nurse.major}</td>
                                             <td>
                                                 <button onClick={ () => this.editNurse(nurse.nurseID)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNurse(nurse.nurseID)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNurse(nurse.nurseID)} className="btn btn-info">View </button>
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

export default ListNurseComponent