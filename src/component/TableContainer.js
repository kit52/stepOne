import React from "react"
import Table from "./Table";
import s from "./Table.module.css"
import Api from "./axios-instance";
import { useState, useEffect } from 'react';
const TableContainer = () => {
    const [records, setRecord] = useState([]);
    const [recordsEdit, setEditRecord] = useState([]);

    useEffect(() => {
        if (records.length < 1) {
            getRecords();
        }
    });

    const getRecords = () => {
        Api.get().then((res) => {
            setRecord([...records, ...res.data])
        })
    }

    const updateRecords = (id, data) => {
        debugger
        Api.update(id, data).then(() => {
            setRecord(records.map((item, i) => {
                if (item._id == data._id) {
                    return { ...item, ...data }
                } else {
                    return item
                }
            })
            )
        }).then(() => setEditRecord([])).catch(e => console.log(e))
    }

    const toCollectEditRecords = (name, id, data, record) => {
        console.log(name);
        console.log(id);
        console.log(data);
        console.log(record);
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
        }
    }


    const putRecords = (e) => {
        if (e.target["FirstName"].value.trim().length > 0 || e.target["LastName"].value.trim().length > 0 || e.target["Phone"].value.trim().length > 0 || e.target["Age"].value.trim().length > 0) {
            let data = {
                "firstName": `${e.target["FirstName"].value}`,
                "lastName": `${e.target["LastName"].value}`,
                "phone": `${e.target["Phone"].value}`,
                "age": `${e.target["Age"].value}`
            }

            Api.put(data).then((res) => {
                let id = res.data._id;
                Api.getOne(id).then(res => setRecord([...records, res]))
            })
        } else {
            alert("Поля ввода не должны быть пусты")
        }
    }

    const deleteRecord = (id) => {
        Api.delete(id).then(() => {
            setRecord([...records.filter((item) => !item._id == id)])
        })
    }

    return <div className={s.table_content}>
        <Table

            toCollectEditRecords={toCollectEditRecords}
            deleteRecord={deleteRecord}
            getRecords={getRecords}
            putRecords={putRecords}
            updateRecords={updateRecords}
            users={records}
            recordsEdit={recordsEdit}
        />

    </div>

}
export default TableContainer