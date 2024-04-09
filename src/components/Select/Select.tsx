import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    selectTitle: string
    onChange: () => void
    items: ItemType[]
    selectCondition: boolean
    setSelectTitleValue: (selectTitleValue: string) => void
    setSelectClosed: (value: boolean)=>void
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <SelectTitle selectTitleValue={props.selectTitle} onChange={props.onChange} />
            {!props.selectCondition && <SelectBody setSelectClosed={props.setSelectClosed} setSelectTitleValue={props.setSelectTitleValue} items={props.items}/>}

            {/*<div onClick={()=>props.onChange()}>{props.selectTitle}</div>*/}
            {/*{!props.selectCondition && <SelectBody items={props.items.map(i=> <div>{i.title}</div>)} />}*/}
            {/*{props.items.map(i=> <div>{i.title}</div>)}*/}
        </div>
    );
};

type SelectTitlePropsType = {
    selectTitleValue: string
    onChange: ()=>void

}

const SelectTitle = (props: SelectTitlePropsType) => {
    return <h3 onClick={() => props.onChange()}>{props.selectTitleValue}</h3>
}

type SelectBodyPropsType = {
    items: ItemType[]
    setSelectTitleValue: (selectTitleValue: string) => void
    setSelectClosed: (value: boolean)=>void
}


const SelectBody = (props: SelectBodyPropsType) => {

    return (
        <ul>
            {props.items.map(el=> {
                const SelectBodyHandler = () => {
                    props.setSelectTitleValue(el.title)
                    props.setSelectClosed(true)
                }
                return <li onClick={SelectBodyHandler} key={el.value}>{el.title}</li>
            })}
        </ul>
    )
}