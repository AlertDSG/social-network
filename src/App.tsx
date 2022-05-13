import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {StoreType} from "./redax/state";
import {MenuLinks} from "./components/MenuLinks/MenuLinks";

type PropsType = {
    store: StoreType
}

export const App = (props: PropsType ) => {
    const state = props.store

    return (
        <div className="App-wrapper">
            <header className="App-header">
                <Header/>
            </header>
            <main className={'main'}>
                <MenuLinks/>
                <Content appState={state.getState()}
                            dispatch={state.dispatch.bind(props.store)}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}


