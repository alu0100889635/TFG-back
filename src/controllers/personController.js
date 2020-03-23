const Person = require('../models/Person');

async function showAll(req, res) {
	const people = await Person.find();
	res.json(people);
}

async function showPerson(req, res) {
	const id = req.params.id;
	const foundPerson = await Person.findById(id);
	res.json(foundPerson);
}

async function updatePerson(req, res) {
	const id = req.params.id;
	const updatedPerson = await Person.findByIdAndUpdate(id, req.body, { new: true });
	res.json(updatedPerson);
}

async function addPerson(req, res) {
	const newPerson = new Person(req.body);
	newPerson.save();
	res.json(newPerson);
}

async function deletePerson(req, res) {
	const id = req.params.id;
	await Person.findByIdAndRemove(id);
	res.json(id);
}

module.exports = { 
    showAll, 
    showPerson, 
    updatePerson, 
    addPerson, 
    deletePerson 
};
