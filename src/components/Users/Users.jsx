import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../images/1aa63493e17019ffb918b635151f9ba1--dearly-beloved-icons.jpg';
import { NavLink } from 'react-router-dom';





let Users = (props) => {



    let pagesCount = props.totalUsersCount / props.pageSize

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(u => {

                    return <span className={props.currentPage === u && s.selectedPage}
                        onClick={() => { props.onPageChanged(u); }}>{u}</span>
                })}
            </div>

            {/* <button onClick={getUsers}>Get Users</button> */}
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.img}>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.unfollow(u.id)
                            }}>UnFollow</button> :
                                <button disabled={props.followingInProgress} onClick={() => {
                                   props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>

                </div>)}
        </div>);

}
export default Users;