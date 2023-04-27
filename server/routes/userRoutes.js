const express = require('express');
const userRouter = express.Router();


// const {isAuthenticated,isSignedIn} = require('../util/utilfunction');

// userRouter.param("id",getUserById);

// userRouter.get("/user/:id",isSignedIn,isAuthenticated,getUser);
// userRouter.get("/users",getAllUsers);
// userRouter.put("/user/:id",isSignedIn,isAuthenticated,updateUser);
// userRouter.get("/orders/user/:id",isSignedIn,isAuthenticated,getUserPurchages);



module.exports = userRouter;