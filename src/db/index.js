const axios = require('axios');

const db = axios.create({
    baseURL: `http://${process.env.USER}:${process.env.PASSWORD}@13.250.43.79:5984/`
});

export default db;