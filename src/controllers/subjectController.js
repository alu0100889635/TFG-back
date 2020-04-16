const Subject = require('../models/Subject');

async function showAll(req, res) {
	let subjects = await Subject.find()
	for(let i = 0; i < subjects.length; i++){
		subjects[i] = {
			_id: subjects[i]._id,
			fullName: subjects[i].fullName,
			dni: subjects[i].dni,
			birthDate: subjects[i].birthDate,
			address: subjects[i].address,
			__v: subjects[i].__v
		}
	}
	res.json(subjects);
}

async function showSubject(req, res) {
	const id = req.params.id;
	const foundSubject = await Subject.findById(id);
	let parsedFoundSubject = {
		_id: foundSubject._id,
		fullName: foundSubject.fullName,
		dni: foundSubject.dni,
		birthDate: foundSubject.birthDate,
		address: foundSubject.address,
		__v: foundSubject.__v
	}
	res.json(parsedFoundSubject);
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

async function deleteAll(req,res){
	Subject.deleteMany();
	res.send("Se han eliminado todos los subjects correctamente");
}

module.exports = { 
    showAll, 
    showSubject, 
    updateSubject, 
    addSubject, 
	deleteSubject,
	deleteAll 
};
