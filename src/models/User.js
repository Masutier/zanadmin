
const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema ({
    rolin: { type: String, default: "user" },
    firstname: { type: String, required: true },
    middlename: { type: String },
    lastname: { type: String, required: true },
    maidenname: { type: String},
    tydoc: { type: String },
    cedulaId: { type: String},
    phoneNum: { type: String, required: true },
    email: { type: String, required:true },
    usaddress: { type: String },
    usbarrio: { type: String },
    uscity: { type: String },
    usdept: { type: String },
    uspais: { type: String, default: 'Colombia' },
    estilo: { type: String, required:true },
    password: { type: String, required:true },
    notasuser: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    newDate: { type: String },
    upDate: { type: String },
    date: { type: Date, default: Date.now },
    habeas: { type: String }
});


UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};


UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('User', UserSchema)
