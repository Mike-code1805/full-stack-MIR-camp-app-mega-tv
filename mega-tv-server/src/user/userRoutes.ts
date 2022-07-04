import { Router } from "express";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";
import { createUserController } from "./controllers/createUserController";

import { deleteUserController } from "./controllers/deleteUserController";
import { getUsersController } from "./controllers/getAllUsersController";
import { updateUserController } from "./controllers/updateUserController";
import { createUserSchema } from "./middlewares/userRequestValidation";



const userRouter: Router = Router();

userRouter
    .route('/api/users')
    .post(bodyRequestValidator(createUserSchema), createUserController)
    .get(getUsersController);
       
userRouter
.route('/api/users/find/:id')
    .put(updateUserController)
    .delete(deleteUserController);
    
export default userRouter;