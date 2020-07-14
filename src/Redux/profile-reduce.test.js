import profileReducer, {addPostActionCreator} from "./profile-reduce";
import React from 'react';
import ProfileStatus from "../components/Container/ProfileInfo/ProfileStatus";
import {create} from "react-test-renderer";





describe('new post should be added', () => {
    test("three post ", ()=> {
let action = addPostActionCreator("it-incubator");
let state = {
    posts: [
        { id: 1, message: "It's my first post", like: 20 },
        { id: 2, message: 'Hello, how are you?', like: 40 }
    ],
};
//2. Action
let newState = profileReducer(state, action);
//3.Expection
expect( newState.posts.length).toBe(3);
    })
});

describe('my-status', () => {
    test("name my-status", ()=> {
        const component =  create (<ProfileStatus status="it-incubator" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-incubator");
    })

});
