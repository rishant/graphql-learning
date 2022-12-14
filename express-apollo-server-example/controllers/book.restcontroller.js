import { Book } from "../models/book.model";

import Rating, {getStar} from "../models/rating";

exports.create = (req, res) => {
    const book = new Book(req.body);
    book.save().then((doc) => {
        res.status(201).json(doc);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating the book." });
    });
}

exports.update = (req, res) => {
    res.status(200).send({ message: "Update api is under development." });
}

exports.findAll = (req, res) => {
    let response = [];
    Book.find({}).then(function (books) {
        books.forEach(book => {
            let respBook = {
                id : book.get("_id"),
                title : book.get("title"),
                pages : book.get("pages"),
                rating : getStar(book.get("rating")),
                authorId : book.get("authorId"),
            };
            response.push(respBook);
        })
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while fetching all the books." });
    });
}

exports.findOne = (req, res) => {
    Book.findOneAndReplace({ _id: req.params.id }, req.body, {
        returnDocument: 'after',
    }).then((doc) => {
        let respBook = {
            id : doc.get("_id"),
            title : doc.get("title"),
            pages : doc.get("pages"),
            rating : getStar(doc.get("rating")),
            authorId : doc.get("authorId"),
        };
        res.status(200).json(respBook);
    }).catch((err) => {
        res.status(500).send({ message: err.message || "Some error occurred while fetching book by id." });
    });
}

exports.delete = (req, res) => {
    Book.findByIdAndDelete({ 
        _id: req.params.id 
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.status(500).send({ message: err.message || "Some error occurred while deleting book by id." });
    });
}