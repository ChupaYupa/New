import React from 'react';
import s from "./Profile.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activEditMode () {
        this.setState({
            editMode:true
        })
    }
    deActivEditMode () {
        this.setState({
            editMode:false
        })
    }

    render() {

        return (
            <> {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivEditMode.bind(this)} value={this.props.status}></input>
                </div>
            }
            </>);
    }
}

export default ProfileStatus;