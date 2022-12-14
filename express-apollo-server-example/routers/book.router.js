const express = require('express');
const bookRouters = express.Router();

import BookRestApiController from '../controllers/book.restcontroller'

bookRouters.get('/', BookRestApiController.findAll);

bookRouters.put('/:id', BookRestApiController.findOne);

module.exports = bookRouters;