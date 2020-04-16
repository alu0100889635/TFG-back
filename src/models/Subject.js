const mongoose = require('mongoose');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
const Schema = mongoose.Schema;
const key = "mtivpiy2ohlbnl9zfx4hqo";

const SubjectSchema = new Schema({
	fullName: {
		type: String,
		required: true
	},
	dni: {
		type: String,
		unique: true,
		required: true
	},
	birthDate: {
		type: Date,
		required: true
	},
	address:{
		type: String,
		required: true
	},
    createdAt:{
        type: Date
    },
    updateAt: {
		type: Date
	}
});

SubjectSchema.plugin(mongooseFieldEncryption, { 
	fields: ["fullName", "dni", "birthDate", "address"], 
	secret: key,
	saltGenerator: function(secret) {
		return "1234567890123456"; // should ideally use the secret to return a string of length 16
	}});
module.exports = mongoose.model('subjects', SubjectSchema);
