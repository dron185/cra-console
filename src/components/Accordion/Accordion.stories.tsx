// import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: "hello",
//         collapsed: true,
//         // onChange: () => {},
//     },
// }

const onChangeHandler = action('Accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={"Collapsed Accordion"}
        collapsed={true}
        onChange={onChangeHandler}
        items={[]}
        onClick={onClickCallback}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={"Opened Accordion"}
        collapsed={false}
        onChange={() => {}}
        items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title: "Viktor", value: 4}]}
        onClick={onClickCallback}
    />
}

export const AccordionDemo = () => {
    const [value, setValue] = useState(false)
    return <Accordion
        titleValue={"Accordion"}
        collapsed={value}
        onChange={() => {setValue(!value)}}
        items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title: "Viktor", value: 4}]}
        onClick={(id)=>{alert(`bla-bla ${id}`)}}
    />
}
