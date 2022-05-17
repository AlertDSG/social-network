import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {MenuLinks} from "./components/MenuLinks/MenuLinks";


export const App = () => {

    return (
        <div className="App-wrapper">
            <header className="App-header">
                <Header/>
            </header>
            <main className={'main'}>
                <MenuLinks/>
                <Content/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}


