import profileReducer, {addPostActionCreator} from "./profile-reduce";
import React from 'react';


it('new post should be added', () => {
    //1. Test data
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
});

