import React from 'react';
import './App.css';
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {MenuLinks} from "./components/MenuLinks/MenuLinks";
import HeaderContainer from "./components/Header/HeaderContainer";


export const App = () => {

    return (
        <div className="App-wrapper">
            <header className="App-header">
                <HeaderContainer/>
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


