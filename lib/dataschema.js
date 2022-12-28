const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tuff:tuff@cluster0.fhsvdnc.mongodb.net/test')
  .then(() => console.log('Connected to database!'));

const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
antilink: { type: String, default: "false" },
antiwalink: { type: String, default: "false" },
antivirtex: { type: String, default: "false" },
antilinktg: { type: String, default: "false" },
antilinkig: { type: String, default: "false" },
antilinktt: { type: String, default: "false" },
antilinktwit: { type: String, default: "false" },
antilinkfb: { type: String, default: "false" },
antilinkytv: { type: String, default: "false" },
antilinkytch: { type: String, default: "false" },
antilinkall: { type: String, default: "false" },
leveling: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
bangroup: { type: String, default: "false" }
})

const UserSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
ban: { type: String, default: "false" },
warns: { type: String, default: "false" }
})

const mk =mongoose.model("Mk", GroupSchema)
const mku =mongoose.model("Mku", UserSchema)
module.exports = { mk, mku }
