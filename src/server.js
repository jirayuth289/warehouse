import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';

const PORT = 8000;

const app = express();

//use middlewares
app.use(logger('dev'));

//parse application/json
app.use(bodyParser.json());

//parse x-wwww-from-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//keep log
app.use((req, res, next) => {
    console.log(req.body);
    next();
});

//all routes
app.use('/v1', routes);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server start on port', PORT)
})





