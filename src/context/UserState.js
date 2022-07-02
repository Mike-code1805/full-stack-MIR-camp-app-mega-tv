import { useReducer } from "react";
import UserContext from "./UserContext";
import { userReducer } from "./UserReducer";
import { types } from "./UserTypes";

const intialState = [];

const UserState = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, intialState);
  const createUser = (user) => {
    dispatch({ type: types.CREATE, payload: user });
  };
  const updateUser = (user) => {
    dispatch({ type: types.UPDATE, payload: user });
  };
  const deleteUser = (id) => {
    dispatch({ type: types.DELETE, payload: id });
  };
  const clearUser = () => {
    dispatch({ type: types.CLEAR, payload: intialState });
  };

  return (
    <UserContext.Provider
      value={{
        user: state,
        createUser,
        updateUser,
        deleteUser,
        clearUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
