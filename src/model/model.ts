import * as Sequelize from "sequelize";
import {initCourseModel} from "./CourseModel";

const env = process.env.NODE_ENV || "development";
const config = require("../config.json")[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;

const dbConnection = new Sequelize(url, config);
export const CourseModel = initCourseModel(dbConnection);