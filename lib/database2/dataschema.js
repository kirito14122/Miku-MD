const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
     id: { type: String,  unique: true ,required: true },
     economy: { type: String, default: "false" }
})
const mk =mongoose.model("mk", GroupSchema)
module.exports = { mk }
