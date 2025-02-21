const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roll_number: {
        type: String,
        required: true
    },
    numbers: [{
        type: String
    }],
    alphabets: [{
        type: String
    }],
    highest_alphabet: [{
        type: String
    }]
});

module.exports = mongoose.model("Data", dataSchema);
