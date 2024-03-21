import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRaiting"
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App(props: any) {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<PageTitle title = {'This is APP component'}/>*/}
            {/*<PageTitle title = {'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}

            {/*<Accordion titleValue = {'Menu'} collapsed = {true}/>*/}
            {/*<Accordion titleValue = {'Users'} collapsed = {false}/>*/}

            {/*Article 2*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}

            <OnOff />

            <UncontrolledAccordion titleValue = {'Menu'}/>

            <UncontrolledRating />

            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}

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
