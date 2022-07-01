import { logger } from "../../logger/appLoger";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";
import { EditUser, User } from "../entity/types/User";
import { userModel } from "../entity/model/userModel";

export const updateUserService = async (
  userId: string,
  user: EditUser,
): Promise<User | null | undefined> => {
  try {  
    if (!userId) throw new Error(`No user id provided`);
    return await updateOneResourceById(userModel)(
      userId, 
      user
    );

  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllUsersService',
      trace: error.message,
    });
    throw new Error('error updating the users');
  }
};