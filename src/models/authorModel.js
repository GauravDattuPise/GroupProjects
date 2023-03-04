// Author Model
// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]},
//  email: {mandatory, valid email, unique}, password: {mandatory} }

const mongoose = require('mongoose');

const authorSchema = new mogoose.Schema({

    fname : {type : String, required : true},
    lname : {type : String, required : true},
    title : {type : String, required : true, enum : ["Mr", "Mrs", "Miss"]},
    email : {type : String, required : true, unique : true},
    passoword : {type : String, required : true}

}, {timestamps : true});

module.exports = mongoose.model("author", authorSchema)