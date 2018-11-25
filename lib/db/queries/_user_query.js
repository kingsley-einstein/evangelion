'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attach_properties = require('../config/_attach_properties');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _init = require('../../auth/_init');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserQuery = function () {
    function UserQuery() {
        _classCallCheck(this, UserQuery);
    }

    _createClass(UserQuery, null, [{
        key: 'create',
        value: function create(req, res) {
            _attach_properties._User.create({
                email: req.body.email,
                username: req.body.username,
                password: _bcrypt2.default.hashSync(req.body.password, _bcrypt2.default.genSaltSync(12)),
                isActive: false
            }).then(function (user) {
                user.save();
                res.status(200).json({
                    message: 'New user registered'
                });
            }).catch(function (err) {
                return res.status(500).json(err);
            });
        }
    }, {
        key: 'logUserIn',
        value: function logUserIn(req, res) {
            _attach_properties._User.findOne({ email: req.body.email }, {}, {}).then(function (user) {
                if (_bcrypt2.default.compareSync(req.body.password, user.password)) {
                    var payload = { id: user._id, password: user.password };
                    var token = _jsonwebtoken2.default.sign(payload, _init.jwtOpts.secretOrKey, { expiresIn: '10d' });

                    res.status(200).json({
                        user: user,
                        token: token
                    });
                } else {
                    res.status(500).json({
                        message: 'Incorrect password'
                    });
                }
            });
        }
    }, {
        key: 'findUser',
        value: function findUser(req, res) {
            _attach_properties._User.findById(req.query.id).then(function (user) {
                return res.status(200).json(user);
            }).catch(function (rejected) {
                return res.status(rejected.status).json(rejected);
            });
        }
    }]);

    return UserQuery;
}();

exports.default = UserQuery;