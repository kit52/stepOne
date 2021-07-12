import React from "react"
import Table from "./Table";
import s from "./Table.module.css"
import Api from "./axios-instance";
import { useState, useEffect } from 'react';
const TableContainer = (props) => {
    const [records, setRecord] = useState([]);
    const getRecords = () => {
        Api.get().then((res) => {
            setRecord([...records, ...res.data])
        })
    }
    const updateRecords = (id, data) => {
        debugger
        Api.update(id, data).then((res) => {
            setEditMode(false)
            setRecord(records.map((item, i) => {
                if (item._id == data._id) {
                    return { ...item, ...data }
                } else {
                    return item
                }
            })
            )
            console.log(records);
        }).catch(e => console.log(e))
    }

    const [recordsEdit, setEditRecord] = useState([]);
    const toCollectEditRecords = (name, id, data, record) => {
        if (recordsEdit.length > 0) {
            recordsEdit.map((item) => {
                debugger
                if (item._id == id) {
                    let obj = {
                        _id: id, data: { ...item.data, [name]: data }
                    }
                    setEditRecord([...recordsEdit, obj])
                }
            });
        } else {
            let obj = {
                _id: id, data: { ...record.data, [name]: data }
            }
            setEditRecord([...recordsEdit, obj])
            console.log(recordsEdit);
        }
    }

    useEffect(() => {
        if (records.length < 1) {
            getRecords();
        }
    });



    const putRecords = (e) => {
        if (e.target["FirstName"].value.trim().length > 0 || e.target["LastName"].value.trim().length > 0 || e.target["Phone"].value.trim().length > 0 || e.target["Age"].value.trim().length > 0) {
            console.log(e.target["FirstName"].value.trim().length);
            let data = {
                "firstName": `${e.target["FirstName"].value}`,
                "lastName": `${e.target["LastName"].value}`,
                "phone": `${e.target["Phone"].value}`,
                "age": `${e.target["Age"].value}`
            }
            Api.put(data).then((res) => {
                let id = res.data._id;
                Api.getOne(id).then(res => setRecord([...records, res]))
                console.log(records);
            })
        } else {
            alert("Поля ввода не должны быть пусты")
        }
    }

    const deleteRecord = (id) => {
        Api.delete(id).then((res) => {
            setRecord([...records.filter((item) => !item._id == id)])
        })
    }

    const [Edit, setEditMode] = useState(false);

    return <div className={s.table_content}>
        {!Edit
            ? <button onClick={() => setEditMode(true)}>Edit</button>
            : <button onClick={() => {

                (recordsEdit.length > 0 ?
                    recordsEdit.map(item => {
                        updateRecords(item._id, item)
                    }) : setEditMode(false))
            }}>Save</button>}
        <Table
            Edit={Edit}
            toCollectEditRecords={toCollectEditRecords}
            deleteRecord={deleteRecord}
            getRecords={getRecords}
            putRecords={putRecords}
            users={records} />
    </div>

}
export default TableContainer