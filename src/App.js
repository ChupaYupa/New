import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://upload.wikimedia.org/wikipedia/ru/2/24/WWF_logo.svg" />
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                   <a>Messages</a>
                </div>
                <div>
                   <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div className = "imag">
                <img src="https://avatanplus.com/files/resources/mid/5b4de991357f5164a8585f43.png" />
                </div>
                <div>
                    ava + discription
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

