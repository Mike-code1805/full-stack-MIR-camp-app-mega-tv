import { User } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { Model as ModelType } from 'mongoose';

export const createResource =
  <
    K extends
      | ModelType<User>
  >(
    Model: K
  ) =>
  async <T>(resource: T): Promise< User | null > => {
    try {
        const newResource = new Model(resource);
        return await newResource.save();
      } catch (error: any) {
        throw new ApplicationError(400, error.message);
      }
  };