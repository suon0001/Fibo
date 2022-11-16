const express = require("express");
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express();

const private_app_token = 'pat-eu1-e483b2bf-5c28-49a7-a39c-0150fdb1e2d8';

require("dotenv-flow").config();

app.get('/', async (req, res) => {
    const deals = 'https://api.hubspot.com/crm/v3/objects/deals';
    const headers = {
        Authorization: `Bearer ${private_app_token}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(deals, {headers});
        const data = response.data;
        res.json(data);
    }
    catch (error) {
        console.error(error);
    }

})


app.get('/', async (req, res) => {
    const deals = 'https://api.hubspot.com/crm/v3/objects/deals';
    const headers = {
        Authorization: `Bearer ${private_app_token}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(deals, {headers});
        const data = response.data;
        res.json(data);
    }
    catch (error) {
        console.error(error);
    }

})



const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
})

module.exports = app;