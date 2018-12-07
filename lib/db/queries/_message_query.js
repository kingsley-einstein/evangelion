'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attach_properties = require('../config/_attach_properties');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageQuery = function () {
    function MessageQuery() {
        _classCallCheck(this, MessageQuery);
    }

    _createClass(MessageQuery, null, [{
        key: 'create',
        value: function create(req, res) {
            _attach_properties._Message.create({
                author: req.query.author,
                recepient: req.query.recepient
            }).then(function (message) {
                _attach_properties._Text.create({
                    author: req.query.author,
                    content: req.body.content,
                    message: message._id
                }).then(function (result) {}).catch(function (rejected) {
                    return res.status(rejected.status).json(rejected);
                });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findAllByRecepient',
        value: function findAllByRecepient(req, res) {
            _attach_properties._Message.paginate({ recepient: req.query.recepient }, { page: req.query.page, limit: 15 }).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findAllByAuthor',
        value: function findAllByAuthor(req, res) {
            _attach_properties._Message.paginate({ author: req.query.author }, { page: req.query.page, limit: 15 }).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findOne',
        value: function findOne(req, res) {
            _attach_properties._Message.findById(req.query.id).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'newText',
        value: function newText(req, res) {
            _attach_properties._Text.create({
                author: req.query.author,
                content: req.body.content,
                message: req.query.message
            }).then(function (result) {
                return res.status(201).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _attach_properties._Message.findByIdAndDelete(req.query.id).then(function (result) {
                return res.status(200).json({ message: 'Message with id ' + result._id + ' deleted' });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'deleteAllByUser',
        value: function deleteAllByUser(req, res) {
            _attach_properties._Message.deleteMany({ author: req.query.author }).then(function (response) {}).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }]);

    return MessageQuery;
}();

exports.default = MessageQuery;