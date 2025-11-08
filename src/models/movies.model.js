import db from "../db/connect.js";
import { DataTypes } from "sequelize";
import {Actors}from './actors.model.js';
import {Directors}from './directors.model.js';
import {Genre}from './genre.model.js';

export const Movies = db.define('Movies',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    synopsis:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    release_year:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

Movies.belongsToMany(Actors,{through: 'movies_actors'});
Actors.belongsToMany(Movies,{through: 'movies_actors'});

Movies.belongsToMany(Directors,{through:'movies_directors'});
Directors.belongsToMany(Movies,{through:'movies_directors'});

Movies.belongsToMany(Genre,{through:"movies_genres"});
Genre.belongsToMany(Movies,{through:"movies_genres"});
