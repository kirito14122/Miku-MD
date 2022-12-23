const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
antilink: { type: String, default: "false" }
})
const mk =mongoose.model("Mk", GroupSchema)
module.exports = { mk }
