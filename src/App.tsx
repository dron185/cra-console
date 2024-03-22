import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRaiting"
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App(props: any) {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    console.log(ratingValue)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onClickAccordion={setAccordionCollapsed}
            />
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

            <OnOff/>
            {/*<UncontrolledAccordion titleValue = {'Menu'}/>*/}
            {/*<UncontrolledRating />*/}

        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle rendering');
//     return <h1>{props.title}</h1>
// }

export default App;
