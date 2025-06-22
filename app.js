import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
   origin:process.env.CORS_ORIGIN,
   credentials:true
}))

app.use(express.json({limit:'12kb'}));
app.use(express.urlencoded({extended:true,limit:'12kb'}));
app.use(express.static('public'))
app.use(cookieParser());


// impport routes 
import userRoutes from './src/routes/user.routes.js';
import activityRoutes from './src/routes/activity.routes.js';

//route declaration
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/activity',activityRoutes);

export { app }