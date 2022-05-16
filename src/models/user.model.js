const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },

    password: {
        type: String
    },
},
{ timestamps: true });

module.exports = mongoose.model('users', UserSchema);

