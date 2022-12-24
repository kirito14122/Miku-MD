const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tuff:tuff@cluster0.fhsvdnc.mongodb.net/test')
  .then(() => console.log('Connected to database!'));

const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
antilink: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
leveling: { type: String, default: "false" },
economy: { type: String, default: "false" }
})

const UsersSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
ban: { type: String, default: "false" },
unban: { type: String, default: "false" }
})
const mk =mongoose.model("Mk", GroupSchema)
const mk1 =mongoose.model("Mk1", UsersSchema)
module.exports = { mk }
module.exports = { mk1 }
