import { Book } from "../models/book.model";
import {RatingEnum} from "../models/rating.enum";

exports.create = (req, res) => {
    const book = new Book(req.body);
    book.save().then((doc) => {
        let bookDTO = {
            id : doc.get("_id"),
            title : doc.get("title"),
            pages : doc.get("pages"),
            rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toJson() : null,
            authorId : doc.get("authorId"),
        };
        res.status(201).json(bookDTO);
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
            let bookDTO = {
                id : book.get("_id"),
                title : book.get("title"),
                pages : book.get("pages"),
                rating : book.get("rating") != null? RatingEnum.valueOf(book.get("rating")).toJson() : null,
                authorId : book.get("authorId"),
            };
            response.push(bookDTO);
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
        let bookDTO = {
            id : doc.get("_id"),
            title : doc.get("title"),
            pages : doc.get("pages"),
            rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toJson() : null,
            authorId : doc.get("authorId"),
        };
        res.status(200).json(bookDTO);
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