const axios = require('axios');

const serverAPI = axios.create({
    baseURL: `http://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/`
});

export default serverAPI;