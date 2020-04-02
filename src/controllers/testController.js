const axios = require("axios");
const URL = "http://178.62.41.123:3000";
const questions = require("./questions.json");
let answers = require("./answers.json");
let subject = require("./subject.json");


const sendPhonecallToDB =  async () => {
	axios.post(URL + "/phonecalls/addPhonecall", answers)
	.then(response => console.log(response))
	.catch(e => console.log(e));
}

const sendSubjectToDB = async () => {

	axios.post(URL + "/subjects/addSubject", subject)
	.then(async response => {
		answers.subject_id = response.data;
		await sendPhonecallToDB();
	})
	.catch(e => console.log(e));
}

const cases = async (intent, parameters) => {
	switch(intent){
		case "Bienvenida":
			console.log("entra en bienvenida");
			return questions.bienvenida;
		case "1pregunta":
			return questions.pregunta1;
		case "2pregunta":
			if(parameters.RecentlyTraveled == "Sí"){
				answers.recentlyTraveled = true;
			}
			console.log("Answers es = ", answers);
			return questions.pregunta2;
		case "3pregunta":
			if(parameters.SickContact == "Sí"){
				answers.sickContact = true;
			}
			console.log("Answers es = ", answers);
			return questions.pregunta3;
		case "4pregunta":
			if(parameters.SickCovidContact == "Sí"){
				answers.sickCovidContact = true;
			}
			console.log("Answers es = ", answers);
			return questions.pregunta4;
		case "5pregunta":
			if(parameters.HealthOfficial == "Sí"){
				answers.healthOfficial = true;
			}
			console.log("Answers es = ", answers);
			return questions.pregunta5;
		case "5pregunta - no":
			console.log("Answers es = ", answers);
			return questions.pregunta5_no;
		case "5pregunta - yes":
			answers.commonSymptoms = true;
			console.log("Answers es = ", answers);
			return questions.pregunta5_yes;
		case "5pregunta - yes - yes": //sí tiene dificultad respiratoria
			answers.difficultyBreathing = true;
			console.log("Answers es = ", answers);
			return questions .pregunta6;
		case "5pregunta - yes - no": //no tiene dificultad respiratoria
			console.log("Answers es = ", answers);
			return questions.pregunta5_yes_no;
		case "5pregunta - yes - no - no": //No pertenece a grupo de riesgo
			console.log("Answers es = ", answers);
			return questions.pregunta5_yes_no_no;
		case "5pregunta - yes - no - yes": //Sí pertenece a grupo de riesgo
			answers.riskyGroup = true;
			console.log("Answers es = ", answers);
			return questions.pregunta6;
		case "6pregunta":
			subject.fullName = parameters.FullName;
			console.log("Subject es = ", subject);
			return questions.pregunta7;
		case "7pregunta":
			subject.dni = parameters.DniNumber;
			console.log("Subject es = ", subject);
			return questions.pregunta8;
		case "8pregunta":
			subject.birthDate= parameters.BirthDate;
			console.log("Subject es = ", subject);
			return questions.pregunta9;
		case "9pregunta":
			subject.address= parameters.Address;
			console.log("Subject es = ", subject);
			await sendSubjectToDB();
			return questions.pregunta10;
			
		default:
			console.log(req.body.queryResult);
			break;

	}
}

module.exports.postTest = async function (req, res) {

	let speech = "";

	const intent = req.body.queryResult.intent.displayName;
	const parameters = req.body.queryResult.parameters;
	console.log(req.body.queryResult);
	speech = await cases(intent, parameters);

	const speechResponse = {
		google: {
			expectUserResponse: true,
			richResponse: {
				items: [
				{
					simpleResponse: {
					textToSpeech: speech
					}
				}
				]
			}
		}
	};
	
	return res.json({
		payload: speechResponse,
		data: speechResponse,
		fulfillmentText: speech,
		speech: speech,
		displayText: speech,
		source: "webhook-echo-sample"
	});
}
