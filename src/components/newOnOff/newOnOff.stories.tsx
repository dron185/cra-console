import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {NewOnOff} from "./newOnOff";

export default {
    title: 'NewOnOff stories',
    component: NewOnOff
};
const callback = action("on or off clicked")

export const OnMode = () => <NewOnOff on={true} onChange={callback}/>
export const OffMode = () => <NewOnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <NewOnOff on={value} onChange={setValue} />
}
