const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
require('mongoose-type-email')

const userSchema = new Schema({
    email: {type: monogoose.SchemaTypes.Email, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String,required: true}
});

const User = mongoose.model('User', userSchema);
module.exports = User;