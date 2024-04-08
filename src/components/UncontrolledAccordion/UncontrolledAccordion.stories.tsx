
import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion
}


export const callback = action('Accordion mode change event fired')

export const ModeChanging = () => <UncontrolledAccordion titleValue={"Users"} />;


