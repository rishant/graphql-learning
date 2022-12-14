import express from 'express';
import http from 'http';
import cors from 'cors';

import mongoose from 'mongoose';

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

// Step: 4 - Express Server With MongoDB Connection.
console.log('Mongoose connecting...')
const dbURI =  process.env.APP_MONGO_URI || 'mongodb://localhost:27017/graphql';

async function createMongoDBConnection() {
    await mongoose.connect(dbURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Mongoose connected...')
}
createMongoDBConnection();

// Step: 5 - Global error handling.
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.send('Something broke!');
}
app.use(globalErrorHandler);

// Step: 6 - Application Home route (application start status route.).
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to rishant application." });
});

// Step: 7 - Application routers.
import bookRouter from './routers/book.router'
app.use('/api/books', bookRouter)

import authorRouter from './routers/author.router'
app.use('/api/authors', authorRouter)

// Step: 8 - Express NodeJS WebFramework -> Over -> Http NodeJS WebServer.
const PORT = 4000;
httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
