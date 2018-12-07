import { _Message, _Text } from '../config/_attach_properties';

class MessageQuery {

    static create(req, res) {
        _Message.create({
            author: req.query.author,
            recepient: req.query.recepient
        })
        .then((message) => {
            _Text.create({
                author: req.query.author,
                content: req.body.content,
                message: message._id
            })
            .then((result) => {

            })
            .catch((rejected) => res.status(rejected.status).json(rejected));
        })
        .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static findAllByRecepient(req, res) {
        _Message.paginate({recepient: req.query.recepient}, {page: req.query.page, limit: 15})
                .then((result) => res.status(200).json(result))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static findAllByAuthor(req, res) {
        _Message.paginate({author: req.query.author}, {page: req.query.page, limit: 15})
                .then((result) => res.status(200).json(result))
                .catch((rejected) => res.status(rejected.status).json(rejected));

    }

    static findOne(req, res) {
        _Message.findById(req.query.id)
                .then((result) => res.status(200).json(result))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static newText(req, res) {
        _Text.create({
            author: req.query.author,
            content: req.body.content,
            message: req.query.message
        })
        .then((result) => res.status(201).json(result))
        .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static delete(req, res) {
        _Message.findByIdAndDelete(req.query.id)
                .then((result) => res.status(200).json({message: `Message with id ${result._id} deleted`}))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static deleteAllByUser(req, res) {
        _Message.deleteMany({author: req.query.author})
                .then((response) => {

                })
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }
}

export default MessageQuery;