import React from 'react';
import s from './FormControls.module.css';

const FormControlss = ({input, meta:{touched,error},children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span>
                 {error}
             </span>}
        </div>
    )
}


 export const Textarea = (props) => {
    const {input, meta,child, ...restProps} = props;
     return <FormControlss {...props}><textarea {...input} {...restProps}/></FormControlss>
 }
export const Input = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <FormControlss {...props}><input {...input}{...restProps}/></FormControlss>
}