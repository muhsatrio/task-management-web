const axios = require('axios');

const instance = axios.create({
    baseURL: `http://${process.env.USER}:${process.env.PASSWORD}@13.250.43.79:5984/`
});

const db = {
    getAllDocuments: async (dbName) => {
        const result = await instance.get(`/${dbName}/_all_docs`);
        return result;
    },
    getDocumentsByID: async (dbName, id) => {
        const result = await instance.get(`/${dbName}/${id}`);
        return result;
    }

}

export default db;