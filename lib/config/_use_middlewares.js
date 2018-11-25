'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _init = require('../auth/_init');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UseMiddlewares = function () {
    function UseMiddlewares() {
        _classCallCheck(this, UseMiddlewares);
    }

    _createClass(UseMiddlewares, null, [{
        key: 'use',
        value: function use(app) {
            app.use(_init.opts.passport.initialize());
            app.use((0, _bodyParser2.default)({ extended: false }));
            app.use((0, _bodyParser.json)());
            app.use((0, _morgan2.default)('dev'));
        }
    }]);

    return UseMiddlewares;
}();

exports.default = UseMiddlewares;