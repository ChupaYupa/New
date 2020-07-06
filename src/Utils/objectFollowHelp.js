import {Field} from "redux-form";
import React from "react";

export let helpBooleenFollow = (items, itemId, objPropName, objBoolen) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...objBoolen}
        }
        return u;
    })
}

export const loginForms = (validate, placeholder, name, component, props) => {
    return <div>
        <Field validate={validate} placeholder={placeholder} name={name} component={component}
               {...props}/>
    </div>
}