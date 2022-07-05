import { userModel } from '../entity/model/userModel';
import { logger } from '../../logger/appLoger';
import { createResource } from '../../shared/factory/createResource';
import { CreateUser, User } from '../entity/types/User';

export const createOneUserService = async (
  orderRequest: CreateUser
): Promise<User | null> => {
  try {
    const user = await createResource(userModel)(orderRequest);
    return user as User;
  } catch (error: any) {
    logger.error('error creating a user service', {
      instance: 'services',
      service: 'createOneUserService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a user ${error.message}`);
  }
};