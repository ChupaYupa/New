import React from 'react';
import s from "./Profile.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activEditMode =()=> {
        this.setState({
            editMode:true
        })
    }
    deActivEditMode = () =>{
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status)
    };
    onStatusChange =(e)=> {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        let a = this.state;
        let b = this.props;
        console.log("Update")
    }

    render() {

        return (
            <> {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activEditMode}>{this.props.status || "No status"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivEditMode} value={this.state.status}></input>
                </div>
            }
            </>);
    }
}

export default ProfileStatus;