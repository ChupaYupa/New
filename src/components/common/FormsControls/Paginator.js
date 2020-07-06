import React from 'react';
import s from './paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = totalUsersCount / pageSize
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            {pages.map(u => {

                return <span className={currentPage === u && s.selectedPage}
                             onClick={() => {
                                 onPageChanged(u);
                             }}>{u}</span>
            })}
        </div>)
};
export default Paginator;