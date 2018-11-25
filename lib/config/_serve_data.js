'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user_query = require('../db/queries/_user_query');

var _user_query2 = _interopRequireDefault(_user_query);

var _init = require('../auth/_init');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServeData = function () {
    function ServeData() {
        _classCallCheck(this, ServeData);
    }

    _createClass(ServeData, null, [{
        key: 'attachEndpoints',
        value: function attachEndpoints(app) {
            app.post('/register', _user_query2.default.create);
            app.post('/login', _user_query2.default.logUserIn);
            app.get('/dashboard', _init.opts.passport.authenticate('jwt', { session: false }), _user_query2.default.findUser);
        }
    }]);

    return ServeData;
}();

exports.default = ServeData;