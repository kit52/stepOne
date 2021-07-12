import * as React from 'react';
import s from "./Table.module.css"
import Input from './Input';
const Table = (props) => {
    console.log(props);
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
        arr2.push(
            <tr key={`${item._id}` + item.data.firstName + item.data.lastName}>
                {arr}
            </tr>
        )
    })


    let arrButtons = [];
    props.users.map(item => {
        arrButtons.push(<button onClick={() => props.deleteRecord(item._id)}>Delete</button>)
    })


    let arrInputs = [];
    props.users.map(item => {
        let arr = [];
        for (let i in item.data) {
            arr.push(<Input name={i} id={item._id} data={item.data[i]} item={item} toCollectEditRecords={props.toCollectEditRecords} />)
        }
        arrInputs.push(<div>{arr}</div>)
    })

    return (
        <div className={s.table}>
            <div className={s.table_container}>
                <table>
                    <thead><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Age</th></tr></thead>
                    <tbody>{!props.Edit ? arr2 : null}</tbody>
                </table>
                {props.Edit ? <div>{arrInputs}</div> : null}
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
            <div className={s.table_btns}>{arrButtons}</div>
        </div>
    )
}



export default Table;