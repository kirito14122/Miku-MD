const mongoose = require('mongoose');
mongoose.connect('....')
  .then(() => console.log('Connected!'));
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
antilink: { type: String, default: "false" },
economy: { type: String, default: "false" }
})
const mk =mongoose.model("Mk", GroupSchema)
module.exports = { mk }
