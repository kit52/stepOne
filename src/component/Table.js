import * as React from 'react';
import s from "./Table.module.css"
import Inputs from './Inputs';
import EditButtons from './EditButtons';
import { useState } from 'react';
const Table = (props) => {

    const [Edit, setEditMode] = useState("");
    let arr2 = [];
    props.users.map(item => {
        let arr = [];
        for (let i in item.data) {
            arr.push(
                <td key={`${item._id}` + Math.floor(Math.random() * 10000000000000)}>
                    {item.data[i]}
                </td>
            )
        }

        arr2.push(Edit == item._id ?
            <Inputs item={item} toCollectEditRecords={props.toCollectEditRecords} />
            : <tr key={`${item._id}` + item.data.firstName + item.data.lastName}>
                {arr}
            </tr>
        )
    })


    let arrButtonsDelete = [];
    props.users.forEach(item => {

        arrButtonsDelete.push(<button onClick={() => props.deleteRecord(item._id)}>Delete</button>)
    })
    let arrButtonsEdit = [];
    props.users.map(item => {
        arrButtonsEdit.push(<EditButtons recordsEdit={props.recordsEdit}
            Edit={Edit}
            setEditMode={setEditMode}
            item={item}
            id={item._id}
            updateRecords={props.updateRecords}
        />)
    })


    return (
        <div className={s.table}>
            <div className={s.table_container}>
                <table>
                    <thead><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Age</th></tr></thead>
                    <tbody> {arr2}</tbody>
                </table>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.putRecords(e)
                }}>
                    <input name="FirstName" id="1" placeholder='Enter first name' />
                    <input name="LastName" placeholder='Enter last name' />
                    <input name="Phone" placeholder='Enter your phone' />
                    <input name="Age" placeholder='Enter age' />
                    <div><button>Add Records</button></div>
                </form>
            </div>
            <div className={s.table_btns}>{arrButtonsDelete}</div>
            <div className={s.table_btns}>{arrButtonsEdit}</div>
        </div>
    )
}



export default Table;