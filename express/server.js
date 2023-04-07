const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 4000

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SuperSecretPassword",
    database:"github_db",
    port:"32700"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(cors());

app.get('/', (req, res) => {
    res.send("API Running")
});

app.get('/users', (req, res) => {
    con.query("SELECT * FROM Users", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.get('/healthdata', (req, res) => {
    con.query("SELECT * FROM HealthData", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})