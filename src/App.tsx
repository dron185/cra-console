import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {Clock} from "./components/Clock/Clock";


function App(props: any) {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    console.log(ratingValue)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    let [switchOn, setswitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
                <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
                items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title: "Viktor", value: 4}]}
                onClick={(id)=>{alert(`bla-bla ${id}`)}}
            />

            <OnOff on={switchOn} onChange={setswitchOn}/>

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


            <UncontrolledOnOff onChange={setswitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue = {'UncontrolledAccordion'}/>
            {/*<UncontrolledRating />*/}


            <Clock/>

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
