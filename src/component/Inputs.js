import React from "react";
import { useState } from 'react';
import Input from "./Input";
const Inputs = (props) => {
    console.log(props);
    // const [value, setValue] = useState(props.data);

    // function handleChange(event) {
    //     setValue(event.target.value);
    // }


    let arrInputs = [];
    for (let i in props.item.data) {
        arrInputs.push(<Input nameValue={i} id={props.item._id} data={props.item.data[i]} item={props.item} toCollectEditRecords={props.toCollectEditRecords} />)
    }


    return <div id={props.item._id}>{arrInputs}</div>
}
export default Inputs