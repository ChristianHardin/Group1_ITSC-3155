const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SuperSecretPassword",
    database:"github_db",
    port:"4005"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(cors());

app.get('/', (req, res) => {
    res.send("API Running")
});

// Get 
app.get('/users', (req, res) => {
    con.query("SELECT * FROM Users", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.get('/usersFullData', (req, res) => {
    con.query("SELECT * FROM Users u JOIN Goals g ON u.userID  = g.userID JOIN HealthData hd ON u.userID = hd.healthDataID", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.get('/userhealthdata', (req, res) => {
    let jobj = JSON.parse(req.query.user);
    console.log(jobj)
    try {
        con.query("SELECT * FROM HealthData WHERE userID = '" + jobj[0].userID +  "'", (err, rows, field)=>{
            if(!err){
                res.send(rows);
            } else {
                // console.log(err);
            }
        });
    } catch (err) {
        // console.log(err)
    }
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

app.get('/goals', (req, res) => {
    con.query("SELECT * FROM Goals", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

// Post
app.post('/login', (req, res) => {
    const user = req.body;
    con.query("SELECT * FROM Users WHERE username = '"+ user.username +"' AND password = '"+ user.password +"';", (err, rows, field)=>{
        if(!err){
            if (rows.length == 0) {
                res.status(200).send({404: "404"})
            } else {
                res.status(200).send(rows)
            }
        } else {
            console.log(err)
        }
    });
});

app.post('/statusupdate', (req, res) => {
    const data = req.body;
    con.query("INSERT INTO HealthData (userID, date, calories, timeExercising, distance) VALUES ("+ data.userID +", "+ data.date +", "+ data.calories +", "+ data.timeExercising +", "+ data.distance +");", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err)
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})