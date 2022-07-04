import { NextFunction, Request, Response } from 'express';
import { getOneUserByIdService } from '../services/getOneUserByIdService';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { updateUserService } from '../services/updateUserService';

export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const currentUser = await getOneUserByIdService(req.params.id);
        if (!currentUser) next(new ApplicationError(400, 'User does not exist'));
        await updateUserService(req.params.id, req.body);
        res.status(200).json({ message: "updated" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'Error updating the user'));
    }
};
