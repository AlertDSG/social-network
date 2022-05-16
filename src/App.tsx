import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {MenuLinks} from "./components/MenuLinks/MenuLinks";

type PropsType = {
    store: any
}

export const App = (props: PropsType ) => {

    return (
        <div className="App-wrapper">
            <header className="App-header">
                <Header/>
            </header>
            <main className={'main'}>
                <MenuLinks/>
                <Content store={props.store}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}


