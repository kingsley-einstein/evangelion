'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attach_properties = require('../config/_attach_properties');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostQuery = function () {
    function PostQuery() {
        _classCallCheck(this, PostQuery);
    }

    _createClass(PostQuery, null, [{
        key: 'createNew',
        value: function createNew(req, res) {
            _attach_properties._Post.create({
                title: req.body.title,
                content: req.body.content,
                author: req.query.author
            }).then(function (result) {
                return res.status(201).json({ id: result._id });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findAll',
        value: function findAll(req, res) {
            _attach_properties._Post.paginate({}, { page: req.query.page, limit: 10 }).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findOne',
        value: function findOne(req, res) {
            _attach_properties._Post.findById(req.query.id).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'edit',
        value: function edit(req, res) {
            _attach_properties._Post.findByIdAndUpdate(req.query.id, {
                title: req.body.title,
                content: req.body.content
            }).then(function (response) {
                return res.status(201).json({ id: response._id });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _attach_properties._Post.findByIdAndDelete(req.query.id).then(function (response) {
                return res.status(200).json({ message: 'Post with id ' + response._id + ' deleted' });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }]);

    return PostQuery;
}();

exports.default = PostQuery;