const mongoose = require('mongoose');
const BlockSchema = new mongoose.Schema({
id: { type: String,required: true },
warnedby: { type: String, default: "false" }
})
const warndb =mongoose.model("warndb", BlockSchema)
module.exports = { warndb }
