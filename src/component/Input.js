import React from "react";
import { useState } from 'react';
import s from "./Table.module.css"
const Input = (props) => {
    const [value, setValue] = useState(props.data);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return <td><input className={s.table_input} value={value}
        onChange={handleChange}
        onBlur={() => props.toCollectEditRecords(props.nameValue, props.id, value, props.item)} />
    </td>

}
export default Input