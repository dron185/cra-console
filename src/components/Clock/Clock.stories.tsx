import {action} from "@storybook/addon-actions";
import {Accordion} from "../Accordion/Accordion";
import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
};

export const BaseExample = () => {
    return <Clock/>
}
