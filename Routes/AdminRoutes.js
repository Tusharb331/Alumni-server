// Routes/AdminRoutes.js
import express from "express";

const adminRouter = express.Router();

// Middleware to log requests
adminRouter.use((req, res, next) => {
    console.log(`Request to Admin Route: ${req.method} ${req.url}`);
    next();
});

// Example route
adminRouter.get("/", (req, res) => {
    res.send("Admin Home");
});

adminRouter.get("/events", (req, res) => {
    const sql = "SELECT events.*, COUNT(event_commits.id) AS commits_count FROM events LEFT JOIN event_commits ON events.id = event_commits.event_id GROUP BY events.id ORDER BY events.schedule DESC";

    con.query(sql, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json(result);
    });
});


// Another example route
adminRouter.get("/example", (req, res) => {
    res.send("Admin Route Example");
});

export { adminRouter };
