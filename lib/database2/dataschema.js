const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
     id: { type: String,  unique: true ,required: true },
     antilink: { type: String, default: "false" },
     nsfw: { type: String, default: "false" }
     economy: { type: String, default: "false" }
})
const mk =mongoose.model("mk", GroupSchema)
module.exports = { mk }
