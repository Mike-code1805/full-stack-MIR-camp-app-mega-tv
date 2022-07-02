import { types } from "./UserTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case types.CREATE:
      return [...state, action.payload];
    case types.UPDATE:
      return state.map((task) => {
        const { id, title, description } = action.payload;
        if (task.id === id) {
          return { ...task, title, description };
        }
        return task;
      });
    case types.DELETE:
      return state.filter((task) => task.id !== action.payload);
    case types.CLEAR:
      return action.payload;
    default:
      return state;
  }
};
