import {catchError} from '../middlewares/catchError.js'
import { Genre } from '../models/genre.model.js'

export const getAll = catchError(async (req,res) => {
    const genres = await Genre.findAll()
    res.json(genres)
})

export const getOne = catchError(async (req,res) => {
    const {id} = req.params;
    const genre = await Genre.findByPk(id);
    if (!genre) return res.status(404).json({message:"Genre not found"})
    res.json(genre) 
})

export const create = catchError(async (req,res) => {
    const genre = await Genre.create(req.body)
    res.status(200).json(genre)
})

export const remove = catchError(async (req,res) => {
    const {id} = req.params;
    await Genre.destroy({where:{id}})
    res.status(204).end()
})

export const update = catchError(async (req,res) => {
    const {id} = req.params;
    const genreEdited = await Genre.update(req.body, {where:{id}})
    if (genreEdited[0] === 0) return res.status(404).json({message:'Genre not found'}) 
    res.json(genreEdited[1][0])    
})