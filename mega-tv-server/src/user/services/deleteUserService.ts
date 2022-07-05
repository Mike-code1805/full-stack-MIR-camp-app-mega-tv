
import { logger } from "../../logger/appLoger";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";
import { userModel as User} from "../entity/model/userModel";


export const deleteUserService = async (id: string): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`No user id provided`);
    return await deleteOneResourceById(User)(id);
  } catch (error: any) {
    logger.error(`Error deleting user: ${error.message}`, {
      instance: 'services',
      fn: 'deleteUserService',
      trace: error.message,
    });
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
