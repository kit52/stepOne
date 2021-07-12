import React from "react";
import { useState } from 'react';
const Input = (props) => {
    const [value, setValue] = useState(props.data);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return <input value={value} onChange={handleChange} onBlur={() => props.toCollectEditRecords(props.name, props.id, value, props.item)} />

}
export default Input