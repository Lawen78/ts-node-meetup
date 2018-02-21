import {Application} from 'express';
import {getAllCourses} from './courses';
import {initPassport} from '../services/auth';

const passport = initPassport();

export function startApi(app:Application){
    app.route('/api/auth/facebook').get(passport.authenticate('facebook'), (req,res)=>{
        console.log('FACEBOOK');
    });

    app.route('/api/auth/facebook/callback').get( (req, res) => {
        console.log('AUTENTICATO')
        res.redirect('/api/courses');
    });

    app.route('/api/courses').get(getAllCourses);
}