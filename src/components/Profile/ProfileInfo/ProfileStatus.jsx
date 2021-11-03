import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state = {
        editMode:false
    }
activateEditMode(){
    this.setState({
        editMode:true
    })                                                                                                                                                                                                                                                                                                                                                                                                                                       
};
deactivatEditMode(){
    this.setState({
        editMode:false
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
            <input autoFocus={true} onBlur={this.deactivatEditMode.bind(this)} value={this.props.status}/>
            </div>
    }
        </div>
      )}
}

export default ProfileStatus;