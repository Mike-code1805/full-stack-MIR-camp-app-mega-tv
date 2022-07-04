import { NextFunction, Request, Response }  from 'express';
import { getOneUserByIdService } from '../../user/services/getOneUserByIdService';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { deleteUserService } from '../services/deleteUserService';

export const deleteUserController = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const currentUser = await getOneUserByIdService(req.params.id);
        if (!currentUser) next(new ApplicationError(400, 'User does not exist'));
        await deleteUserService(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'Error deleting the user'));
    }
};