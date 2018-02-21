import * as Sequelize from "sequelize";
import {Course} from "./model/Course";
import {conf} from './config';

const env = process.env.NODE_ENV || "development",
    url = conf[env].url || process.env.DATABSE_CONNECTION_URI || 'postgres://postgres:postgres@localhost:5432/postgres',
    dbConnection = new Sequelize(url, conf[env]);

export {dbConnection, Course};