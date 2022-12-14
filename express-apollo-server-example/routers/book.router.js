const express = require('express');
const bookRouters = express.Router();

import BookRestApiController from '../controllers/book.restcontroller'

// C U R D

bookRouters.put('/', BookRestApiController.create);

bookRouters.post('/:id', BookRestApiController.update);

bookRouters.get('/', BookRestApiController.findAll);

bookRouters.get('/:id', BookRestApiController.findOne);

bookRouters.delete('/:id', BookRestApiController.delete);

module.exports = bookRouters;