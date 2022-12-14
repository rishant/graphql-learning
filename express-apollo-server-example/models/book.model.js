import mongoose from 'mongoose';

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
        type: String,
        enum: ['FIVE_STARS', 'FOUR_STARS', 'THREE_STARS', 'TWO_STARS', 'ONE_STAR'],
        required: true
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