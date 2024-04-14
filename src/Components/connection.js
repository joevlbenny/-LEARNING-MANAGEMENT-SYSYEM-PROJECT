var mysql = require('mysql');
const express = require("express");
const cors = require("cors");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lms"
});
const app = express();
app.use(express.json());
app.use(cors());


con.connect(function (err) {
    if (err) {
        console.log("Error connecting to Db");
        throw err;
    }
    console.log("Connected!");

    app.post('/register', (req, res) => {

        const username = req.body.username;
        const age = req.body.age;
        const email = req.body.email;
        const password = req.body.password;


        con.query("INSERT INTO users(name,email,age,password) VALUES('joel','jo@gmail.com','22','jkl')", (err, result) => {
            console.log(err);
        })
    })

    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    })

    // var sql = "INSERT INTO customers (name, address) VALUES ('Company jo', 'Highway ')";
    // con.query(sql, function (err) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });
});