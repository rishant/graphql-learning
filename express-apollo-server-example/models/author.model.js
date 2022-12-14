import mongoose from 'mongoose';

import { db } from '../utilities/MongoConnection';

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, { collection: 'authors' });

authorSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

authorSchema.set('toJSON', {
    virtuals: true,
});

const Author = db.model('Author', authorSchema);

export {
    Author 
}