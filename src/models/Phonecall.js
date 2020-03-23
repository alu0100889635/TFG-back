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
		type: Boolean
	},
	sickContact: {
		type: Boolean
	},
	sickCovidContact: {
		type: Boolean
	},
	healthOfficial: {
		type: Boolean
	},
	commonSymptoms: {
		type: Boolean
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
