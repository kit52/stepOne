let state = {
    users: [
        { data: { "lastName": "Snow", "firstName": "Jon", "age": "30" }, "_id": "0" },
        { data: { "lastName": "Lannister", "firstName": "Alex", "age": "34" }, "_id": "1" },
        { data: { "lastName": "Lannister", "firstName": "Garen", "age": "23" }, "_id": "2" },
        { data: { "lastName": "Stark", "firstName": "Vladimir", "age": "36" }, "_id": "3" },
        { data: { "lastName": "Targaryen", "firstName": "Timo", "age": "12" }, "_id": "4" },
        { data: { "lastName": "Melisandre", "firstName": "Gven", "age": "45" }, "_id": "5" },
        { data: { "lastName": "Clifford", "firstName": "Vladimir", "age": "43" }, "_id": "6" },
        { data: { "lastName": "Frances", "firstName": "Iorik", "age": "64" }, "_id": "7" },
        { data: { "lastName": "Roxie", "firstName": "Varvik", "age": "24" }, "_id": "8" }

    ],


}
export const addRecord = (data) => {
    return state = {
        ...state,
        users: [...state.users, data]
    }

}
export default state;