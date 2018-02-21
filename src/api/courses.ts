import {dbConnection, Course} from "../database/database";
import {Request, Response} from 'express';
import { onError } from "./apiError";

export function getAllCourses(req: Request, res: Response){
    
    Course.getInstance(dbConnection).queryFindAll()
    //.then(() =>{throw new Error('QUI l\'errore non verrà catturato dal middleware degli errori')})
    .then(results => {
        res.status(200).json({results});
    }).catch(err => {
        onError(res, "Errore nella richiesta getAllCourses", err);
    })
}