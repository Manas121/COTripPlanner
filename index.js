const express = require ("express");
const app = express ();


const mysql = require ("mysql");


const db = mysql.createConnection  ({

    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginRegistration",

});



app.listen (3001, () => {

console.log ("server running");

});