const express = require('express');
const bookRouters = express.Router();

import BookRestApiController from '../controllers/book.restcontroller'

// C U R D

bookRouters.put('/', BookRestApiController.createBook);

bookRouters.post('/:id', BookRestApiController.updateBook);

bookRouters.get('/', BookRestApiController.findAllBooks);

bookRouters.get('/:id', BookRestApiController.findBookById);

bookRouters.delete('/:id', BookRestApiController.deleteBookbyId);

bookRouters.get('/title/:title', BookRestApiController.findBookByTitle);

module.exports = bookRouters;