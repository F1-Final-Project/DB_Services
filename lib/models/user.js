const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    permission: { type: String, default: 'waiter'}, //admin / waiter / cook
    workingHours: [{}]
});

UserSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, config.SALT,
            function(err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
};

UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        permission: this.permission,
        firstName: this.firstName,
        lastName: this.lastName,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, config.SECRET);
};

UserSchema.methods.toAuthJSON = function() {
    return {
        id: this._id,
        permission: this.permission,
        token: this.generateJWT(),
    };
};

module.exports = mongoose.model('User', UserSchema);
