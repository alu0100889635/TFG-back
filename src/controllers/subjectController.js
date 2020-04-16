const Subject = require('../models/Subject');

async function showAll(req, res) {
	const subjects = await Subject.find();
	res.json({ 
		id_: subjects.id, 
		fullName: subjects.fullName,
		dni: subjects.dni, 
		birthDate: subjects.birthDate, 
		address: subjects.address
	});
}

async function showSubject(req, res) {
	const id = req.params.id;
	const foundSubject = await Subject.findById(id);
	res.json(foundSubject);
}

async function updateSubject(req, res) {
	const id = req.params.id;
	const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, { new: true });
	res.json(updatedSubject);
}

async function addSubject(req, res) {
	const newSubject = new Subject(req.body);
	newSubject.save();
	res.json(newSubject.id);
}

async function deleteSubject(req, res) {
	const id = req.params.id;
	await Subject.findByIdAndRemove(id);
	res.json(id);
}

module.exports = { 
    showAll, 
    showSubject, 
    updateSubject, 
    addSubject, 
    deleteSubject 
};
