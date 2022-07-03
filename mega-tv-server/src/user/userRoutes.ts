import { Router } from "express";
import { createUserController } from "./controllers/createUserController";

import { deleteUserController } from "./controllers/deleteUserController";
import { getUsersController } from "./controllers/getAllUsersController";
import { updateUserController } from "./controllers/updateUserController";



const userRouter: Router = Router();

userRouter
    .route('/api/users')
    .post(createUserController)
    .get(getUsersController);
       
userRouter
.route('/api/users/find/:id')
    .put(updateUserController)
    .delete(deleteUserController);
    
export default userRouter;