const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	fullName: {
		type: String
	},
	dni: {
		type: String
	},
	birthDate: {
		type: Date
	},
	street: {
		type: String
	},
	number: {
		type: Number
	},
	city: {
		type: String
	},
	zipCode: {
		type: Number
	},
	province: {
		type: String
    },
    createdAt:{
        type: Date
    },
    updateAt: {
		type: Date
	}
});

module.exports = mongoose.model('subject', SubjectSchema);
