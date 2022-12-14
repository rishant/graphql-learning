const express = require('express');
const authorRouters = express.Router();

authorRouters.get('/', function (req, res) {
    res.status(200).send({
        message: `get all authors`
     });
});

authorRouters.put('/:id', function (req, res) {
    res.status(200).send({
       message: `get author ${req.params.id}`
    });
});

module.exports = authorRouters;