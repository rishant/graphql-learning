import { Book } from "../models/book.model";

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
    Book.find({}).then(function (books) {
        res.status(200).json(books);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while fetching all the books." });
    });
}

exports.findOne = (req, res) => {
    Book.findOneAndReplace({ _id: req.params.id }, req.body, {
        returnDocument: 'after',
    }).then((doc) => {
        res.status(200).json(doc);
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