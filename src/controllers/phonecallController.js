const Phonecall = require('../models/Phonecall');

async function showAll(req, res) {
	const Phonecalls = await Phonecall.find();
	res.json(Phonecalls);
}

async function showPhonecall(req, res) {
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

module.exports = { 
    showAll, 
    showPhonecall, 
    updatePhonecall, 
    addPhonecall, 
    deletePhonecall 
};