const express = require('express');
const bookRouters = express.Router();

bookRouters.get('/', function (req, res) {
    res.status(200).send({
        message: `get all books`
     });
});

bookRouters.put('/:id', function (req, res) {
    res.status(200).send({
       message: `get book ${req.params.id}`
    });
});

module.exports = bookRouters;