
exports.create = (req, res) => {
    res.status(200).send({
        message: `create author api controller`
    });
}

exports.findAll = (req, res) => {
    res.status(200).send({
        message: `getAll author api controller`
    });
}

exports.findOne = (req, res) => {
    res.status(200).send({
        message: `getOne author api controller`
    });
}