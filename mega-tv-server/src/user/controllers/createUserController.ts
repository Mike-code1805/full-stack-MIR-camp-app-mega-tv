import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { createOneUserService } from '../services/createOneUserService';

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try {
        const newUser = await createOneUserService(req.body);
        console.log(req.body);
        res.status(201).json( newUser );
    } catch (error: any) {
        logger.error('error on create user controller', {
        instance: 'controller',
        service: 'createUserController',
        trace: error.message,
        });
        next(new ApplicationError(403, error.message));
    }
};