const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationsSchema = new Schema({ 
    operador_id:{
        type: ObjectId
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
	riskGroup: {
		type: Boolean
	},
	createdAt: {
		type: Date
    },
    updateAt: {
		type: Date
	},
    person_id: {
        type: String
    },
    observations: {
        type: [ObservationsSchema]
    }
});

module.exports = mongoose.model('phonecalls', PhonecallSchema);
