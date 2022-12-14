
exports.create = (req, res) => {
    res.status(200).send({
        message: `create book api controller`
    });
}

exports.findAll = (req, res) => {
    res.status(200).send({
        message: `getAll book api controller`
    });
}

exports.findOne = (req, res) => {
    res.status(200).send({
        message: `getOne book api controller`
    });
}