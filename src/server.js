import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';
import { sequelize } from './models';
// import aa from './generate'

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
    // console.log(`${req.url} ${req.method}`);
    next();
});

//set routes
app.use('/v1', routes);

//catch 404 and forward to error handle
app.use((req, res, next) => {
    let err = new Error(`${req.method} ${req.url} Not Found`)
    err.status = 404
    next(err)
});

// error handler
app.use((err, req, res, next) => {
    console.log(err);

    const status = err.status || 500;
    res.status(status).json({ message: false, message: err.message });
});

const startServer = (app) => {
    const server = http.createServer(app);

    server.listen(PORT, (err) => {
        if (err) {
            throw err;
        }

        console.log('Server start on port', PORT)
    })
}

//db connect
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        startServer(app);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });





