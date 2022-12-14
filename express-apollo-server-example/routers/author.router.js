const express = require('express');
const authorRouters = express.Router();

import AuthorRestApiController from '../controllers/author.restcontroller'

// C U R D

authorRouters.put('/', AuthorRestApiController.create);

authorRouters.post('/:id', AuthorRestApiController.update);

authorRouters.get('/', AuthorRestApiController.findAll);

authorRouters.get('/:id', AuthorRestApiController.findOne);

authorRouters.delete('/:id', AuthorRestApiController.delete);


module.exports = authorRouters;