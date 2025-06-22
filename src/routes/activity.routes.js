import express from 'express';
import { Router } from 'express';
import { logActivity, getActivities } from '../controllers/activity.controllers.js';
import { verifyJWT} from '../middleware/auth.middleware.js'; // JWT middleware

const router = Router();

router.route('/log').post(verifyJWT,logActivity);
router.route('/').get(verifyJWT,getActivities);



export default router;
