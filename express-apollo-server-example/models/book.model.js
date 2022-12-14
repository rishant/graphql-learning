import mongoose, { Schema } from 'mongoose';

import { db } from '../utilities/MongoConnection';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    rating: {
        type: Schema.Types.Mixed
    },
    authorId: {
        type: String,
        required: false
    }
}, { collection: 'books' });

bookSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

bookSchema.set('toJSON', {
    virtuals: true,
});

const Book = db.model('Book', bookSchema);

export { 
    Book 
}