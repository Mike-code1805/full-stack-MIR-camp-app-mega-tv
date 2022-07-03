import { types } from "./UserTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case types.CREATE:
      return [...state, action.payload];
    case types.UPDATE:
      console.log(action.payload);
      return state.map((user) => {
        const { id, name, lastname, address, nroApart, plan, email, phone } =
          action.payload;
        if (user.id === id) {
          return {
            ...user,
            name,
            lastname,
            address,
            nroApart,
            plan,
            email,
            phone
          };
        }
        return user;
      });
    case types.DELETE:
      return state.filter((task) => task.id !== action.payload);
    case types.CLEAR:
      return action.payload;
    default:
      return state;
  }
};
