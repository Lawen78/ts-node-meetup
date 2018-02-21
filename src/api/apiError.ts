import {Request, Response, RequestHandler, ErrorRequestHandler, NextFunction} from 'express';


export function apiError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
){
    console.error(`Gestore Errore API invocato per l'errore ${err}`);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal Server Error',
        detail: err
    });
}

export function onError(res: Response, message: string, err: any){
    console.error("Errore nella catena della Promise", message, err);
    res.status(500).send;
}