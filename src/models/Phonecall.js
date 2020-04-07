const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationsSchema = new Schema({ 
    operador_id:{
        type: String
    },
    message:{
        type: String
    } 
});

const PhonecallSchema = new Schema({
	recentlyTraveled: {
		type: Boolean,
		required: true
	},
	sickContact: {
		type: Boolean,
		required: true
	},
	sickCovidContact: {
		type: Boolean,
		required: true
	},
	healthOfficial: {
		type: Boolean,
		required: true
	},
	commonSymptoms: {
		type: Boolean,
		required: true
	},
	difficultyBreathing: {
		type: Boolean
	},
	riskyGroup: {
		type: Boolean
	},
	subject_id: {
        type: String
    },
    observations: {
        type: [ObservationsSchema]
    },
	createdAt: {
		type: Date
    },
    updateAt: {
		type: Date
	}
});

module.exports = mongoose.model('phonecalls', PhonecallSchema);
