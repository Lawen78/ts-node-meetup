import {Application} from 'express';
import {getAllCourses} from './courses';

export function startApi(app:Application){
    app.route('/api/courses').get(getAllCourses);
}