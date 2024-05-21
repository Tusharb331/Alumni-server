import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

let connection;

function handleDisconnect() {
    connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.NAME,
        port: process.env.DB_PORT
    });

    connection.connect((err) => {
        if (err) {
            console.error("Error connecting to database:", err);
            setTimeout(handleDisconnect, 2000); // Retry after 2 seconds
        } else {
            console.log("Connected to database");
        }
    });

    connection.on('error', (err) => {
        console.error("Database error:", err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET' || err.fatal) {
            handleDisconnect(); // Reconnect on connection loss
        } else {
            throw err;
        }
    });
}

handleDisconnect();

export default connection;
