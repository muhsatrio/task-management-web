const axios = require('axios');

const serverAPI = axios.create({
    baseURL: `http://${process.env.USER_DB}:${process.env.PASSWORD_DB}@13.250.43.79:5984/`
});

export default serverAPI;