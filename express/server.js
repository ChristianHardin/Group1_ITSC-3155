const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
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

app.post('/userhealthdata', (req, res) => {
    const data = req.body;
    try {
        con.query("SELECT * FROM HealthData WHERE userID = " + data[0].userID +  ";", (err, rows, field)=>{
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
                console.log(data)
            }
        });
    } catch (err) {
        console.log(err)
    }
});

app.post('/getUserGoalData', (req, res) => {
    const data = req.body;
    con.query("SELECT * FROM Goals WHERE userID ="+ data.userID +";", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.post('/removeUserGoalData', (req, res) => {
    const data = req.body;
    con.query("DELETE FROM Goals WHERE userID = " + data.userID + ";", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

app.post('/insertUserGoalData', (req, res) => {
    const data = req.body;
    con.query("INSERT INTO Goals (userID, caloriesToBurn, timeToExercise, distanceToGo) VALUES ("+ data.userID +", "+ data.caloriesToBurn +", "+ data.timeToExercise +", "+ data.distanceToGo +");", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});


app.post('/currentCount', (req, res) => {
    const data = req.body;
    con.query("SELECT * FROM currentCount WHERE userID ="+ data.userID +";", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

// Post
app.post('/login', (req, res) => {
    const data = req.body;
    con.query("SELECT * FROM Users WHERE username = '"+ data.username +"' AND password = '"+ data.password +"';", (err, rows, field)=>{
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

app.post('/register', (req, res) => {
    const user = req.body;
    con.query("INSERT INTO Users (name, username, password) VALUES ('"+ user.name + "','"+ user.username +"','"+ user.password +"');", (err, rows, field)=>{
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

app.post('/healthdatainsert', (req, res) => {
    const data = req.body;
    con.query("INSERT INTO HealthData (userID, calories, timeExercising, distance, age, weight, height) VALUES ("+ data.userID +","+ data.calories +","+ data.timeExercising +","+ data.distance +","+ data.age +","+ data.weight +","+ data.height +");", (err, rows, field)=>{
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

app.post('/removestatus', (req, res) => {
    const data = req.body;
    con.query("DELETE FROM currentCount WHERE userID = " + data.userID + ";", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err)
        }
    });
});

app.post('/removehealthdata', (req, res) => {
    const data = req.body;
    con.query("DELETE FROM HealthData WHERE userID = " + data.userID + ";", (err, rows, field)=>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err)
        }
    });
});

app.post('/statusupdate', (req, res) => {
    const data = req.body;
    con.query("INSERT INTO currentCount (userID, calories, timeExercising, distance) VALUES ("+ data.userID +", "+ data.calories +", "+ data.timeExercising +", "+ data.distance +");", (err, rows, field)=>{
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