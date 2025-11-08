import db from "../db/connect.js";
import { DataTypes } from "sequelize";

export const Actors = db.define('Actors',{
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    second_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    birthday:{
        type:DataTypes.DATE,
        allowNull:false,
    },
})