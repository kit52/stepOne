import axios from "axios";

export const instance = axios.create({
    baseURL: "http://178.128.196.163:3000/api/records",
})

const Api = {
    get() {
        return instance.get(``).then((res) => res);
    },
    put(data) {
        return instance.put(``, { data }).then((res) => res);
    },
    getOne(id) {
        return instance.get(`/${id}`).then((res) => {
            return res.data;
        });
    },
    delete(id) {
        return instance.delete(`/${id}`).then((res) => {
            return res;
        });
    },
    update(id, data) {
        return instance.post(`/${id}`, { ...data }).then((res) => {
            return res;
        });
    },
};
export default Api;
