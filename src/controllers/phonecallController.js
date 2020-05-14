const Phonecall = require('../models/Phonecall');

async function showAll(req, res) {
	const phonecall = await Phonecall.find()
	res.json(phonecall);
}

async function showPhonecall(req, res){
	const id = req.params.id;
	const foundPhonecall = await Phonecall.findById(id);
	res.json(foundPhonecall);
}

async function updatePhonecall(req, res) {
	const id = req.params.id;
	const updatedPhonecall = await Phonecall.findByIdAndUpdate(id, req.body, { new: true });
	res.json(updatedPhonecall);
}

async function addPhonecall(req, res) {
	const newPhonecall = new Phonecall(req.body);
	newPhonecall.save();
	res.json(newPhonecall);
}

async function deletePhonecall(req, res) {
	const id = req.params.id;
	await Phonecall.findByIdAndRemove(id);
	res.json(id);
}

async function getObservations(req, res) {
	console.log("Hola", req.params.id);
	let temp = [];
	let observations = [];
	try{
		await Phonecall.findById(req.params.id)
		.then(phonecall => {
			temp = phonecall.observations;
			for(let i = temp.length; i>=0; i--){
				observations.push(temp[i]);
			}
			res.json(observations);
		}).catch(function(err){
			console.log(err);
		});
	} catch(e){
		next(e);
	}
}

async function addObservation(req, res) {
	console.log(req.params.id);
	try{
		await Phonecall.findById(req.params.id)
		.then(phonecall => {
			phonecall.observations.push(req.body);
			phonecall.save();
			res.json(phonecall);
		}).catch(function(err){
			console.log(err);
		});
	} catch(e){
		next(e);
	}
}

async function deleteObservations(req, res) {
	const phonecall = await Phonecall.findOneAndUpdate(
		{ _id: req.params.id }, 
		{ $set: { observations: [] } },
		function (error, success) {
				if (error) {
					console.log(error);
				} else {
					console.log(success);
				}
	});
	res.json(phonecall);
}

module.exports = { 
    showAll, 
    showPhonecall, 
	updatePhonecall, 
    addPhonecall, 
	deletePhonecall,
	addObservation,
	deleteObservations,
	getObservations 
};
