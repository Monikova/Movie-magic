import express from 'express';
import routes from './routes.js'
import mongooseInit from './config/mongooseInit.js';
import handlebarsInit from './config/handlebarsInit.js';
import 'dotenv/config';

mongooseInit();

const app = express();
handlebarsInit(app);

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(5000, () => console.log('Server is up and running, listening at http://localhost:5000...'));