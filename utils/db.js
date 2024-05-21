import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
    port: process.env.DB_PORT 
})
// port: process.env.PORT remove port to run offline 

con.connect((err) => {
    if (err) {
        console.log("Connection Error", err)
    } else {
        console.log("connected")
    }
})

export default con;
