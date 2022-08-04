// import dotenv
try{
    require('dotenv').config();
} catch (error){
    console.log(error);
}

// import mysql
const mysql = require('mysql2/promise');

// connect to mysql
function connect(){
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employee_db',
    })
}

// export connect function
module.exports = {
    connect,
}