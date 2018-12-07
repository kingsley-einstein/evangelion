import { _Post } from '../config/_attach_properties';

class PostQuery {

    static createNew(req, res) {
        _Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.query.author
        })
        .then((result) => res.status(201).json({id: result._id}))
        .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static findAll(req, res) {
        _Post.paginate({}, {page: req.query.page, limit: 10})
             .then((result) => res.status(200).json(result))
             .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static findOne(req, res) {
        _Post.findById(req.query.id)
             .then((result) => res.status(200).json(result))
             .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static edit(req, res) {
        _Post.findByIdAndUpdate(req.query.id, {
            title: req.body.title,
            content: req.body.content
        })
        .then((response) => res.status(201).json({id: response._id}))
        .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static delete(req, res) {
        _Post.findByIdAndDelete(req.query.id)
             .then(response => res.status(200).json({message: `Post with id ${response._id} deleted`}))
             .catch((rejected) => res.status(rejected.status).json(rejected));
    }
}

export default PostQuery;