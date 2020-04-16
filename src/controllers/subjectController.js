const Subject = require('../models/Subject');

const deleteKeysBy = (obj, expression) =>{
	console.log(Object.keys(obj));
	/* Object.keys(obj).forEach(key => {
	if (key.includes(expression)) {
		console.log("entra en el if")
		delete(obj[key]);
	}
}) */};

async function showAll(req, res) {
	let subjects = await Subject.find();
	subjects.forEach(element => console.log("Elemento", element)/* deleteKeysBy(element, '__enc_' */);
	//console.log(subjects);
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
