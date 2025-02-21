const express = require("express");

const authRouter = express.Router();

authRouter.get("/bfhl", async (req, res) => {
    try {
        res.status(200).json({ msg: "operation Code " + 1 });
    } catch (error) {
        res.status(400).send("Invalid operation Code");
    }
});

authRouter.post("/bfhl", async (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input data" });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const highest_alphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]] : [];

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highest_alphabet
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = authRouter;
