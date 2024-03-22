import React from 'react';

type OnOfPropsType = {
    onClick: (toggle: boolean)=>void
    toggle: boolean
}


export const ControlledOnOff = (props: OnOfPropsType) => {

    const onStyle = {
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.toggle ? "green" : "white",
    }
    const offStyle = {
        width:'30px',
        height:'20px',
        border:'1px solid black',
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.toggle ? "white" : "red",
    }
    const indicatorStyle = {
        width:'10px',
        height:'10px',
        borderRadius:'50%',
        border:'1px solid black',
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.toggle ? "green" : "red",
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onClick(props.toggle)} } >On</div>
            <div style={offStyle} onClick={()=>{props.onClick(props.toggle)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};