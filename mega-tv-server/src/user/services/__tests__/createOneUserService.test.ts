import { createResource } from "../../../shared/factory/createResource";
import { mockRequest, mockResponse } from "../../../shared/testUtils/fixtures";
import { createOneUserService } from "../createOneUserService";

jest.mock('../../../shared/factory/createResource');

const createResourceMock = createResource as jest.MockedFunction<
  typeof createResource
>;

describe('createOneUserService ', () => {

  it('should return an error when user id is undefined', async () => {
    try {
      const internal = jest.fn().mockImplementation();
      createResourceMock.mockImplementation(() => internal);
      await createOneUserService(mockRequest.body);
    } catch (error: any) {
      expect(error.message).toEqual(
        `Error creating user`
      );
    }
  });

  it('should return the user when the user is created', async () => {
    const internal = jest.fn().mockImplementation(() => Promise.resolve(mockResponse));
    createResourceMock.mockImplementation(() => internal);
    const result = await createOneUserService(mockRequest.body);
    expect(result).toEqual(mockResponse);
  });
});
