const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://admin:iniadmin@13.250.43.79:5984/'
});

export default instance;