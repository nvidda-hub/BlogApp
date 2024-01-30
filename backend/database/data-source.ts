import { configDotenv } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";

const ENV = process.env.NODE_ENV;
configDotenv({path : !ENV ? '.env' : `.env.${ENV}`})

export const dataSourceOptions : DataSourceOptions = {
    type : 'postgres',
    host : process.env.DB_HOST_NAME,
    port : parseInt(process.env.DB_PORT),
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    entities : ['dist/src/**/*.entity.js'],
    migrations : ['dist/database/migrations/**/*.js']
}

const dataSoruce = new DataSource(dataSourceOptions)
dataSoruce
.initialize()
.then(() => {
    console.log("Db connection is succesful")
})
.catch(err => {
    console.log(`Connection failed | Reason : ${JSON.stringify(err)} with dataSourceOptions : ${JSON.stringify(dataSourceOptions)}`)
})

export default dataSoruce;