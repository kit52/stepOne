import React from "react";
import s from "./Table.module.css"
import { useState } from 'react';
import Input from "./Input";
const Inputs = (props) => {

    let arrInputs = [];
    for (let i in props.item.data) {
        arrInputs.push(<Input nameValue={i} id={props.item._id} data={props.item.data[i]} item={props.item} toCollectEditRecords={props.toCollectEditRecords} />)
    }

    return <tr className={s.table_Inputs} id={props.item._id}>{arrInputs}</tr>
}
export default Inputs