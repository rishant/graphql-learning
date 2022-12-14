const express = require('express');
const authorRouters = express.Router();

import AuthorRestApiController from '../controllers/author.restcontroller'

authorRouters.get('/', AuthorRestApiController.findAll);

authorRouters.get('/:id', AuthorRestApiController.findOne);

module.exports = authorRouters;