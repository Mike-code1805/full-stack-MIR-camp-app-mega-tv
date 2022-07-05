import { mockData } from "../../../shared/testUtils/fixtures";
import { deleteOneResourceById } from "../../../shared/factory/deleteOneResourceById";
import { deleteUserService } from "../deleteUserService";

// import { mockData } from '../../../shared/testUtils/fixtures';

// const { projectId, userId } = mockData;

jest.mock('../../../shared/factory/deleteOneResourceById');

const deleteOneResourceByIdMock = deleteOneResourceById as jest.MockedFunction<
  typeof deleteOneResourceById
>;

describe('deleteUserService ', () => {
  it('should return an error when user id is undefined', async () => {
    try {
      await deleteUserService('');
    } catch (error: any) {
      expect(error.message).toEqual(
        `Error deleting user: No user id provided`
      );
    }
  });

  it("should return null if the user doesn't exist", async () => {
    const internal = jest.fn().mockImplementation(() => Promise.resolve(null));
    deleteOneResourceByIdMock.mockImplementation(() => internal);
    const result = await deleteUserService(mockData[0]._id);
    expect(result).toEqual(null);
  });

  it("should return { deletedCount: 1 } if the user was deleted", async () => {
    const internal = jest.fn().mockImplementation(() => Promise.resolve({ deletedCount: 1 }));
    deleteOneResourceByIdMock.mockImplementation(() => internal);
    const result = await deleteUserService(mockData[0]._id);
    expect(result).toEqual({"deletedCount": 1});
  });
});
