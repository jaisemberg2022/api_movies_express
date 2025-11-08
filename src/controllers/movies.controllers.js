import { catchError } from '../middlewares/catchError.js';
import { Actors } from '../models/actors.model.js';
import { Directors } from '../models/directors.model.js';
import { Genre } from '../models/genre.model.js';
import { Movies } from '../models/movies.model.js';

export const getAll = catchError(async (req, res) => {
	const movies = await Movies.findAll({
		include: [{ model: Genre }, { model: Actors }, { model: Directors }],
	});
	res.json(movies);
});

export const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const movies = await Movies.findByPk(id);
	if (!movies) return res.status(404).json({ message: 'movie not found' });
	res.json(movies);
});

export const create = catchError(async (req, res) => {
	const movies = await Movies.create(req.body);
	res.status(200).json(movies);
});

export const remove = catchError(async (req, res) => {
	const { id } = req.params;
	await Movies.destroy({ where: { id } });
	res.status(204).end();
});

export const update = catchError(async (req, res) => {
	const { id } = req.params;
	const [updatedRows] = await Movies.update(req.body, { where: { id } });
	if (updatedRows === 0)
		return res.status(404).json({ message: 'movie not found' });
	const updatedMovies = await Movies.findByPk(id);
	res.json(updatedMovies);
});

//Relaciones
export const setGenres = catchError(async (req, res) => {
    const {id} = req.params;
    const movie = await Movies.findByPk(id);
    if(!movie) return res.status(404).json({message:"movie not found"})
    await movie.setGenres(req.body)
    const genres = await movie.getGenres()
    res.json(genres)
})

export const setActors = catchError(async (req, res) => {
    const {id} = req.params;
    const movie = await Movies.findByPk(id);
    if(!movie) return res.status(404).json({message:"movie not found"})
    await movie.setActors(req.body)
    const actors = await movie.getActors()
    res.json(actors); 
})

export const setDirectors = catchError(async (req, res) => {
    const {id} = req.params;
    const movie = await Movies.findByPk(id);
    if(!movie) return res.status(404).json({message:"movie not found"})
    await movie.setDirectors(req.body);
    const directors = await movie.getDirectors()
    res.json(directors)
})