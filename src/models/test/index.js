const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({});

module.exports = mongoose.model("test", testSchema);
