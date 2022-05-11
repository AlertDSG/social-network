import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redax/state"
import reportWebVitals from './reportWebVitals';


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addpost={store.addPost.bind(store)}
                     updateNewPostText={store.upDateNewPostText.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
