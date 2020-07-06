import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../images/1aa63493e17019ffb918b635151f9ba1--dearly-beloved-icons.jpg';
import {NavLink} from 'react-router-dom';


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                    <span>
                        <div className={s.img}>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress} onClick={() => {
                                    unfollow(user.id)
                                }}>UnFollow</button> :
                                <button disabled={followingInProgress} onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>

        </div>)
}
export default User;