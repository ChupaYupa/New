import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost} from './Redux/State';
import {BrowserRouter} from "react-router-dom";
// import {renderEntinerThree} from './Redux/State';
import * as serviceWorker from './serviceWorker';
//import {rerenderEntinerThree} from "./render";
import store from './Redux/State';

let rerenderEntinerThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}  />,
    </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntinerThree(store.getState());
store.subscribe(rerenderEntinerThree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
