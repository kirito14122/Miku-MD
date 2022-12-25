const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tuff:tuff@cluster0.fhsvdnc.mongodb.net/test')
  .then(() => console.log('Connected to database!'));

const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
antilink: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
leveling: { type: String, default: "false" },
bangroup: { type: String, default: "false" }
})

const UserSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
ban: { type: String, default: "false" }
})

const mk =mongoose.model("Mk", GroupSchema)
const mku =mongoose.model("Mku", UserSchema)
module.exports = { mk, mku }
