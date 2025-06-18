import { asyncHandler } from "../utils/AsyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import JWT from 'jsonwebtoken';
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req,resp,next) => {


   try {
    
   const token =  req.cookies?.accessToken || req.header
   ("authorization")?.replace("Bearer ","");

   if(!token){
       throw new ApiError(401,"unauthorized request")
   }


   const decodedToken = JWT.verify(token,process.env.ACCESS_TOKEN_SECRET);

   const user = await User.findById(decodedToken?._id).select("-password, -refreshToken");

   if(!user){
       throw new ApiError(401,"invalid  Access Token")
   }

   req.user = user;
   next();
   } catch (error) {
      throw new ApiError(401,error?.message || "invalid accessToken")
   }
})