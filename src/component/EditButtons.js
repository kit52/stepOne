import React from "react";
const EditButtons = (props) => {
    console.log(props);
    return (
        props.Edit != props.id
            ? <button onClick={() => props.setEditMode(props.id)}>Edit</button>
            : <button onClick={() => {
                (props.recordsEdit.length > 0 ?
                    props.recordsEdit.map(item => {
                        props.updateRecords(item._id, item)
                        props.setEditMode("")
                    }) : props.setEditMode(""))
            }}>Save</button>
    )
}
export default EditButtons