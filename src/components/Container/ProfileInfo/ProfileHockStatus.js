import React, {useState, useEffect} from 'react';
import s from "./Profile.module.css";


const ProfileHockStatus = (props)=> {

    // let stateWithSetState = useState(true);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    //                  useEffect!!!!
    useEffect (() => {
        setStatus(props.status);
    }, [props.status]);

   const activEditMode = () => {
        setEditMode(true);
    };
    const deActivEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <> {!editMode &&
                <div>
                    <span onDoubleClick={activEditMode}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivEditMode} value={status}/>
                </div>
            }
            </>);
}

export default ProfileHockStatus;