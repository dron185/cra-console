import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }

    }, []);

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital': //если кейс 'digital' либо default: мы сделали 'digital' дефолтным
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockViewPropsType = {
    date: Date
}

