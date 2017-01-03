var mongoose;
if (typeof module !== 'undefined' && module.exports) {
     mongoose = require('mongoose');
}

(function (expose, factory) {
    if (mongoose) {
        module.exports = factory;
    } else {
        expose.User = factory;
    }
}(this, new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type : String, match: /^\S+@\S+$/ },
    identity: {
        lastname: String,
        firstname: String,
        gender: Boolean,
        birthdate : { type : Date, default : Date.now }
    },
    location: {
        country: String,
        town: String,
        zipcode: String,
        address: String
    }
})));