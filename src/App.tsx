import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
// import {Raiting} from "./components/Raiting/Raiting";
import {log} from 'console';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import {Raiting} from "./components/UncontrolledRaiting/Raiting"

function App(props: any) {
    console.log('App rendering');
    return (
        <div>
            {/*<PageTitle title = {'This is APP component'}/>*/}
            {/*<PageTitle title = {'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Raiting value = {3}/>*/}

            {/*<Accordion titleValue = {'Menu'} collapsed = {true}/>*/}
            {/*<Accordion titleValue = {'Users'} collapsed = {false}/>*/}

            {/*Article 2*/}
            {/*<Raiting value = {0}/>*/}
            {/*<Raiting value = {1}/>*/}
            {/*<Raiting value = {2}/>*/}
            {/*<Raiting value = {3}/>*/}
            {/*<Raiting value = {4}/>*/}
            {/*<Raiting value = {5}/>*/}

            <OnOff />
            <OnOff />

            <UncontrolledAccordion titleValue = {'Menu'}/>
            <UncontrolledAccordion titleValue = {'Users'}/>

            <Raiting />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>
}

export default App;
