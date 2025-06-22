import { Router } from "express";
import {upload} from "../middleware/multer.middleware.js"
import { Changepassword, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvatar } from "../controllers/user.controllers.js";
import { verifyJWT} from "../middleware/auth.middleware.js";


const router = Router();

router.route('/register').post(
    upload.fields([
        {name:"avatar",
        maxCount:1
    }
    ]),
    registerUser
)

router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT,logoutUser)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/change-password').post(verifyJWT,Changepassword)
router.route('/update-account').patch(verifyJWT,updateAccountDetails)
router.route('/avatar').patch(verifyJWT,upload.single("avatar"),updateUserAvatar)

export default router;

