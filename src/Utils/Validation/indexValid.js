import React from 'react';


export const requiredField = (value) => {
    if(value) {
        return undefined
    }
    return 'Field is required';
}

export const maxLengthreator = (maxLength) =>(value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}