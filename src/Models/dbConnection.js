const mysql = require("mysql2/promise")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kj.sim2!220",
    database: "hospital",
    port: 3306
})

module.exports = db