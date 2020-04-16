const Subject = require('../models/Subject');

async function showAll(req, res) {
	let subjects = await Subject.find();
	for(let i = 0; i < subjects.length; i++){
		[__enc_fullName,__enc_dni,__enc_birthDate_d,__enc_birthDate,__enc_address].forEach(function (k) {
			delete subjects[i][k];
		});
	}
	res.json(subjects);
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
