const mongoose = require('mongoose');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
const Schema = mongoose.Schema;

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

SubjectSchema.plugin(mongooseFieldEncryption, { fields: ["fullName", "dni", "birthDate", "address"], secret: "some secret key"});

module.exports = mongoose.model('subjects', SubjectSchema);
