const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

const db = require('./app/models');
db.requelize.sync({ force: true }).then(() => {
    console.log('Database Syncing...')
});

app.get('/', (req, res) => {
    res.send('Default Roult')
});

require('./app/routes/list.route')(app);

app.listen(PORT, () => {
    console.log("Server is running on port 8080 " + PORT) 
});