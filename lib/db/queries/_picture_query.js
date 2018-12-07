'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attach_properties = require('../config/_attach_properties');

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PictureQuery = function () {
    function PictureQuery() {
        _classCallCheck(this, PictureQuery);
    }

    _createClass(PictureQuery, null, [{
        key: 'create',
        value: function create(req, res) {
            var form = new _formidable2.default.IncomingForm();

            form.parse(req, function (error, fields, files) {
                try {
                    console.log(files);
                } catch (error) {
                    throw new Error(error);
                }
            });
        }
    }, {
        key: 'findAllByOwner',
        value: function findAllByOwner(req, res) {
            _attach_properties._Picture.paginate({ owner: req.query.owner }, { page: req.query.page, limit: 20 }).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'findOne',
        value: function findOne(req, res) {
            _attach_properties._Picture.findById(req.query.id).then(function (result) {
                return res.status(200).json(result);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _attach_properties._Picture.findByIdAndDelete(req.query.id).then(function (result) {
                return res.status(200).json({ message: 'Picture with id ' + result._id + ' deleted' });
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }]);

    return PictureQuery;
}();

exports.default = PictureQuery;