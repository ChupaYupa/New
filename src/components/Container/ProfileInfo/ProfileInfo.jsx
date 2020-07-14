import React, {useState} from 'react';
import s from './Profile.module.css';
import ProfileHockStatus from './ProfileHockStatus.js'
import userPhoto from './../../../images/1aa63493e17019ffb918b635151f9ba1--dearly-beloved-icons.jpg';
import ProfileDataForm from "./ProfileDataForm";
import {loginForms} from "../../../Utils/objectFollowHelp";
import {Input} from "../../common/FormsControls/FormsControls";
import {saveProfile} from "../../../Redux/profile-reduce";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);
    //Обработчик для загрузки изображения
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {

        props.saveProfile(formData)
            .then(
                () => {
                    setEditMode(false);
                }
            )
    }

    return (
        <div>
            <div className={s.tutol}>
                {props.profile.fullName}
            </div>
            <div className={s.discriptionblock}>

                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                     className={s.photo}/>
                {/*загрузка изображения*/}
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <ProfileHockStatus status={props.status} updateStatus={props.updateStatus}/>

                {editMode ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile}
                                   isOwner={props.isOwner}
                    />}


            </div>
        </div>);
}

export const ProfileData = (props) => {

    return <div>

        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full Name</b>: {props.profile.fullName}
            {/*{loginForms(null, "Full name", "fullName", Input)}*/}
            <b> Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}

        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contacts contactsTitle={key} contactsValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}


export const Contacts = ({contactsTitle, contactsValue}) => {
    return <div className={s.contact}><b>{contactsTitle}</b>: {contactsValue}</div>
}
export default ProfileInfo;