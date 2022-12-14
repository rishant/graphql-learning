import {Author} from "../models/author.model";

exports.create = (req, res) => {
    const author = new Author(req.body);
    author.save().then((doc) => {
        res.status(201).json(doc);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating the author." });
    });

    res.status(200).send({
        message: `create author api controller`
    });
}

exports.update = (req, res) => {
    res.status(200).send({ message: "Update api is under development." });
}

exports.findAll = (req, res) => {
    Author.find({}).then(function (authors) {
        res.status(200).json(authors);
    });
}

exports.findOne = (req, res) => {
    Author.findOneAndReplace({ _id: req.params.id }, req.body, {
        returnDocument: 'after',
    }).then((doc) => {
        res.status(200).json(doc);
    }).catch((err) => {
        res.status(500).send({ message: err.message || "Some error occurred while fetching author by id." });
    });
}

exports.delete = (req, res) => {
    Author.findByIdAndDelete({ 
        _id: req.params.id 
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.status(500).send({ message: err.message || "Some error occurred while deleting author by id." });
    });
}