const mySQL = require("mysql");

const connection = mySQL.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test2",
    });
    
 connection.connect(function(err){
     if(err) throw err
     console.log("mysql connected to user")

 })
 module.exports = connection
