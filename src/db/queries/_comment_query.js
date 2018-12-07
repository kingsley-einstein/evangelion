import { _Comment } from '../config/_attach_properties';

class CommentQuery {

    static create(req, res) {
        _Comment.create({
            author: req.query.author,
            content: req.body.content,
            post: req.query.post
        })
        .then((response) => res.status(201).json({id: response._id}))
        .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static findAllByPost(req, res) {
        _Comment.paginate({post: req.query.post}, {page: req.query.page, limit: 20})
                .then((response) => res.status(200).json(response))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static edit(req, res) {
        _Comment.findByIdAndUpdate(req.query.id, {
            content: req.body.content
        })
        .then((response) => {
            
        })
        .catch((rejected) => res.status(rejected.status).json(rejected));
    }

    static delete(req, res) {
        _Comment.findByIdAndDelete(req.query.id)
                .then((response) => res.status(200).json({message: `Comment with id ${response.id} deleted`}))
                .catch((rejected) => res.status(rejected.status).json(rejected));
    }
}

export default CommentQuery;