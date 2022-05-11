import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App-wrapper">
            <header className="App-header">
                <Header/>
            </header>
            <main>
                <Content appState={()=>{}}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
