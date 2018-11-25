'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.opts = exports.jwtOpts = undefined;

var _passportJwt = require('passport-jwt');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _environment = require('../environment');

var _attach_properties = require('../db/config/_attach_properties');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwtOpts = exports.jwtOpts = {
    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: _environment.secret
};

var strategy = new _passportJwt.Strategy(jwtOpts, function (jwt_payload, next) {
    _attach_properties._User.findById(jwt_payload.id).then(function (user) {
        return next(null, user);
    }).catch(function (rejected) {
        return next(null, false);
    });
});

_passport2.default.use(strategy);

var opts = exports.opts = {
    passport: _passport2.default
};