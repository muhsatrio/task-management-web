const instance = require('./instance');

const db = {
    getAllDocuments: async (dbName) => {
        const result = await instance.get(`/${dbName}/_all_docs`);
        return result;
    }
}

export default db;