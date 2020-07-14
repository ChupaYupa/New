import React from "react";
import {Contacts} from "./ProfileInfo";
import {Form, reduxForm} from "redux-form";
import {loginForms} from "../../../Utils/objectFollowHelp";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";

import s from './Profile.module.css'
const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <Form onSubmit={handleSubmit}>
        <div>
            <button onClick={() => {
            }}>save
            </button>
            {error &&
            <div className={s.formSummeryError}>{error}</div>
            }
        </div>
        <div>
            <b>Full Name</b>:
            {loginForms(null, "Full name", "fullName", Input)}
            <b>Looking for a job</b>:
            {loginForms(null, "", "lookingForAJob", Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills</b>:
            {loginForms(null, "mySkills", "lookingForAJobDescription", Textarea)}
        </div>

        <div>
            <b>About me</b>:
            {loginForms(null, "AboutMe", "aboutMe", Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact} key={key}>
            <b>{key} : {loginForms(null, key, "contacts"+ key, Input)}</b></div>
        })}
        </div>
    </Form>
}

const ProfileReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
export default ProfileReduxForm;