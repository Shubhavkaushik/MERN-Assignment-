const express = require('express');
const app = express();
const { mongoConnect } = require('./db');
const PORT = 4444
const cors = require('cors')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());
app.get('/api/data', (req, res) => {
    res.json([country,sector,alldata])
    ;
  });

mongoConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('http://localhost:' + PORT);
        });
    })