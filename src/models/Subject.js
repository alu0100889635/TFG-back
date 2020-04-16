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

const secretKey = () => {
	const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	console.log("La key es = ",key);
	return key;
}
SubjectSchema.plugin(mongooseFieldEncryption, { fields: ["fullName", "dni", "birthDate", "address"], secret: "123456"});
module.exports = mongoose.model('subjects', SubjectSchema);
