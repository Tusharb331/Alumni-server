// Routes/AdminRoutes.js
import express from "express";

const adminRouter = express.Router();

// Example route
adminRouter.get("/", (req, res) => {
    res.send("Admin Home");
});

// Another example route
adminRouter.get("/example", (req, res) => {
    res.send("Admin Route Example");
});

export { adminRouter };
