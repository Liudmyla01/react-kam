import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
   
    state = {
        editMode:false,
        status:this.props.status
    }
activateEditMode(){
    this.setState({
        editMode:true
    })                                                                                                                                                                                                                                                                                                                                                                                                                                       
};
deactivatEditMode(){
    this.setState({
        editMode:false
    });
    this.props.updateStatus(this.state.status);
}
onStatusCha = (e) => { 
this.setState({
    status:e.currentTarget.value
})

}


    render(){
      return ( <div>
            {!this.state.editMode &&
            <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>
        }
        {this.state.editMode &&
            <div>
            <input onChange={this.onStatusCha}  autoFocus={true} onBlur={this.deactivatEditMode.bind(this)} value={this.state.status}/>
            </div>
    }
        </div>
      )}
}

export default ProfileStatus;