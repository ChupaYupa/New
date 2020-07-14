import React from 'react';
import Preoader from "../common/Preoader/Preoader";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preoader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}