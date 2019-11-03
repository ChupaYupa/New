import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';

const Container = () => {
    return (
        <div className={s.content}>
            <div className={s.imag}>
                <img src="http://blog.getgoodrank.ru/wp-content/uploads/2015/08/123.jpg" />
            </div>
            <div className = {`${s.item} ${s.active}`}>
                <a>ava + discription</a>
            </div>
            <MyPosts />
        </div>);
}
export default Container;