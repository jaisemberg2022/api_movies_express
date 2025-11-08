import { catchError } from '../middlewares/catchError.js';
import { Directors } from '../models/directors.model.js';

export const getAll = catchError(async (req, res) => {
	const directors = await Directors.findAll();
	res.json(directors);
});

export const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const director = await Directors.findByPk(id);
	if (!director) return res.status(404).json({ message: 'director not found' });
	res.json(director);
});

export const create = catchError(async (req, res) => {
	const director = await Directors.create(req.body);
	res.status(200).json(director);
});

export const remove = catchError(async (req, res) => {
	const { id } = req.params;
	await Directors.destroy({ where: { id } });
	res.status(204).end();
});

export const update = catchError(async (req, res) => {
	const { id } = req.params;
	const [updatedRows] = await Directors.update(req.body, { where: { id } });

	if (updatedRows === 0) return res.status(404).json({ message: 'director not found' });
	const updatedDirector = await Directors.findByPk(id);
	res.json(updatedDirector);
});
