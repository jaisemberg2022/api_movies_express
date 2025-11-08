import { catchError } from '../middlewares/catchError.js';
import { Actors } from '../models/actors.model.js';

export const getAll = catchError(async (req, res) => {
	const actors = await Actors.findAll();
	res.json(actors);
});

export const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const actor = await Actors.findByPk(id);
	if (!actor) return res.status(404).json({ message: 'actor not found' });
	res.json(actor);
});

export const create = catchError(async (req, res) => {
	const actor = await Actors.create(req.body);
	res.status(200).json(actor);
});

export const remove = catchError(async (req, res) => {
	const { id } = req.params;
	await Actors.destroy({ where: { id } });
	res.status(204).end();
});

export const update = catchError(async (req, res) => {
	const { id } = req.params;
	const [updatedRows] = await Actors.update(req.body, { where: { id } });

	if (updatedRows === 0)
		return res.status(404).json({ message: 'Actor not found' });

	const updatedActor = await Actors.findByPk(id);
	res.json(updatedActor);
});
