const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require("crypto");

const encrypt = (text) => {
	let cipher = crypto.createCipher('aes-256-cbc', process.env.SERVER_SECRET);
  	let crypted = cipher.update(text,'utf8','hex');
  	crypted += cipher.final('hex');
  	return crypted;
}

const decrypt = (text) => {
	if (text === null || typeof text === 'undefined') {return text;};
  	let decipher = crypto.createDecipher('aes-256-cbc', process.env.SERVER_SECRET);
  	let dec = decipher.update(text,'hex','utf8');
  	dec += decipher.final('utf8');
  	return dec;
}

const SubjectSchema = new Schema({
	fullName: {
		type: String,
		get: decrypt,
		set: encrypt
	},
	dni: {
		type: String,
		unique: true,
		get: decrypt,
		set: encrypt
	},
	birthDate: {
		type: Date,
		get: decrypt,
		set: encrypt
	},
	address:{
		type: String,
		get: decrypt,
		set: encrypt
	},
    createdAt:{
        type: Date
    },
    updateAt: {
		type: Date
	}
},
{ typeKey: '$type' }
);

module.exports = mongoose.model('subjects', SubjectSchema);
