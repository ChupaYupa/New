import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                follow: true, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                follow: false, fullName: 'Misha', status: 'I am cool', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                follow: true, fullName: 'Sasha', status: 'I am good', location: { city: 'Kiev', country: 'Ukraine' }
            },

        ])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.img}>
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> : <button onClick={() => { props.follow(u.id) }}>Followed</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>

            </div>)}
        </div>);
}
export default Users;