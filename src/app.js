import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js'
import mongooseInit from './config/mongooseInit.js';
import 'dotenv/config';

mongooseInit();

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views'); 


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(5000, () => console.log('Server is up and running, listening at http://localhost:5000...'));