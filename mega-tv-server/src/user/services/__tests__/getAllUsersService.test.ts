import { mockData } from "../../../shared/testUtils/fixtures";
import { userModel } from "../../entity/model/userModel";
import { getAllUsersService } from "../getAllUsersService";

// jest.mock('../getAllUsersService');
const UserModelMock = userModel as jest.MockedClass<typeof userModel>;

describe('getAllUsersService', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should return an array of users', async () => {
    UserModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockData));
    const result = await getAllUsersService();
    expect(result).toEqual(mockData);
  });
})
