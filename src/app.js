const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const axios = require('axios');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res) => {
    res.json({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
    });
});







app.get('/api/user/:userId', (req, res) => {
    axios({
            method: 'get',
            url: `https://reqres.in/api/users/${req.params.userId}`,
            responseType: 'json'
        })
        .then(function(response) {
            res.json(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});


app.get('/api/user/:userId/avatar', (req, res) => {
    axios({
            method: 'get',
            url: `https://reqres.in/api/users/${req.params.userId}/avatar`,
            responseType: 'document'
        })
        .then(function(response) {
            let img = new Buffer(fs.readFileSync(response)).toString('base64');

            res.download(response);
            res.json(img);
        })
        .catch(error => {
            res.send(error);
        });
});


app.delete('/api/user/:userId/avatar', (req, res) => {
    axios({
            method: 'delete',
            url: `https://reqres.in/api/users/${req.params.userId}/avatar`
        })
        .then(function(response) {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        });
});




app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;