import { logger } from "../../logger/appLoger";
import { findAllResources } from "../../shared/factory/findAllResources";
import { userModel } from "../entity/model/userModel";
import { User } from "../entity/types/User";

export const getAllUsersService = async (newsUsers: any): Promise<User[]> => {
  try {
    const users: User[] = await findAllResources(userModel)();
    return users;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllUsersService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
