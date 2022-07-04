import { getAllUsersService } from "../getAllUsersService";

jest.mock('../getAllUsersService');

it('should return all users', async () => {
    const users = await getAllUsersService();
    expect(users).toEqual([]);
});