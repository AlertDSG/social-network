import React, {useEffect} from 'react';
import './App.css';
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {MenuLinks} from "./components/MenuLinks/MenuLinks";
import HeaderContainer from "./components/Header/HeaderContainer";
import {useAppDispatch, useAppSelector} from "./app/hooks/hooks";
import {initialisedApp} from "./app/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";


export const App = () => {

    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.initialized)

    useEffect(() => {
        dispatch(initialisedApp())
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

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


