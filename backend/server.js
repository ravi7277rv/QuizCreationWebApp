import express from 'express';
import { config } from 'dotenv';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import cors from 'cors';
import ConnectDatabase from './database/database.js';

//Initilization of App from express
const app = express();

//Configuring dotenv for .env file
config();

//Connection to the database
ConnectDatabase();

//Using middlewares
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json({ limit : "10mb" }));
app.use(bodyParser.urlencoded({ limit : "10mb", extended : true }))


//Importing Routes
import category from './routes/categoriesRoutes.js';
import cloze from './routes/clozeRoutes.js';
import comp from './routes/comprehensionRoutes.js';


//Using the routes
app.use("/api/v1/",category);
app.use("/api/v1",cloze);
app.use("/api/v1",comp);


//Listening app on port 
app.listen(process.env.PORT,() => {
    console.log(`The server is running on http://127.0.0.1:${process.env.PORT}`);
})
