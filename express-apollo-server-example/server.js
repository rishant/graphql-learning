import express from 'express';
import http from 'http';
import cors from 'cors';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import { resolvers } from './schema/Resolvers'

// Step: 1 - Express Server Initialization.
const app = express();
const httpServer = http.createServer(app);

// Step: 2 - Express Server Request Parser.
// parse json objects
app.use(express.json()); // parse application/json
// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true})); // parse application/x-www-form-urlencoded

// Step: 3 - Express Server Cross-Origion.
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

// Step: 4 - Global error handling.
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.send('Something broke!');
}
app.use(globalErrorHandler);

// Step: 5 - Application Home route (application start status route.).
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to rishant application." });
});

// Step: 6 - Application routers.
import bookRouter from './routers/book.router'
app.use('/api/books', bookRouter)

import authorRouter from './routers/author.router'
app.use('/api/authors', authorRouter)

const fs = require('fs');
const path = require('path');
console.log('directory-name 👉️', __dirname);

// Step: 7 - ApolloServer -> Over -> Express NodeJS WebFramework -> Over -> Http NodeJS WebServer.
async function startApolloServer() { 
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({
        typeDefs: fs.readFileSync(path.join(__dirname, 'graphql', 'schema.graphql'), 'utf8'),
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();        
    app.use(expressMiddleware(server));

    // Step: 8 - Express NodeJS WebFramework -> Over -> Http NodeJS WebServer.
    const PORT = 4000;
    httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`);
    });
}
startApolloServer();
