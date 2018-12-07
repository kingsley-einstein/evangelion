'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attach_properties = require('../config/_attach_properties');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentQuery = function () {
    function CommentQuery() {
        _classCallCheck(this, CommentQuery);
    }

    _createClass(CommentQuery, null, [{
        key: 'create',
        value: function create(req, res) {
            _attach_properties._Comment.create({
                author: req.query.author,
                content: req.body.content,
                post: req.query.post
            }).then(function (response) {
                return res.status(201).json({ id: response._id });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findAllByPost',
        value: function findAllByPost(req, res) {
            _attach_properties._Comment.paginate({ post: req.query.post }, { page: req.query.page, limit: 20 }).then(function (response) {
                return res.status(200).json(response);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'edit',
        value: function edit(req, res) {
            _attach_properties._Comment.findByIdAndUpdate(req.query.id, {
                content: req.body.content
            }).then(function (response) {}).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _attach_properties._Comment.findByIdAndDelete(req.query.id).then(function (response) {
                return res.status(200).json({ message: 'Comment with id ' + response.id + ' deleted' });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }]);

    return CommentQuery;
}();

exports.default = CommentQuery;