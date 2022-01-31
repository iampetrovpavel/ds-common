import {NextFunction, Request, Response} from "express"
import {NotAuthorizedError} from "../errors/not-authorized-error"

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if(!req.currentUser || !req.currentUser.admin){
        throw new NotAuthorizedError()
    }
    next()
}