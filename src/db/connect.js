import { Sequelize } from "sequelize";
import {env} from '../env/index.js'

const sequelize = new Sequelize(env.DATABASE_URL ,{
    dialect:"postgres",
    logging:false
})

export const connectDb  = async () => {
        console.log('conectando a la base de datos...')
        await sequelize.authenticate();
        console.log('base de datos conectada')
        console.log('sincronizando modeles')
        await sequelize.sync()
        console.log('modelos sincronizados')
}

export default sequelize;