import React from 'react';
import s from './Container.module.css';
let c1 = 'item';
let c2 = 'active';
let classes = `${s.item} ${s.active}`;

const Container = () => {
    return (
        <div className={s.content}>
            <div className={s.imag}>
                <img src="http://blog.getgoodrank.ru/wp-content/uploads/2015/08/123.jpg" />
            </div>
            <div className = {`${s.item} ${s.active}`}>
                <a>ava + discription</a>
            </div>
            <div>
                My posts
                    <div className={s.item}>
                    New post
                    </div>
                <div className={s.item}>
                    Post1
                    </div>
                <div className={s.item}>
                    Post2
                    </div>
            </div>
        </div>);
}
export default Container;