// import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClickAccordion: (collapsed: boolean)=>void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClickAccordion} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

// function Accordion(props: AccordionPropsType) {
//   if (props.collapsed === true) {
//     return (
//       <div>
//         <AccordionTitle title = {props.titleValue}/>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <AccordionTitle title = {props.titleValue}/>
//         <AccordionBody />
//       </div>
//     )
//   }
// }

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean)=>void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={()=>{props.onClick(props.collapsed)}}>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;