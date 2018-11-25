'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Entry = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _serve_views = require('./_serve_views');

var _serve_views2 = _interopRequireDefault(_serve_views);

var _use_middlewares = require('./_use_middlewares');

var _use_middlewares2 = _interopRequireDefault(_use_middlewares);

var _serve_data = require('./_serve_data');

var _serve_data2 = _interopRequireDefault(_serve_data);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entry = exports.Entry = function () {
    function Entry() {
        _classCallCheck(this, Entry);
    }

    _createClass(Entry, null, [{
        key: 'bindViews',
        value: function bindViews(app) {
            _serve_views2.default.renderViews(app);
        }
    }, {
        key: 'useMiddleWares',
        value: function useMiddleWares(app) {
            _use_middlewares2.default.use(app);
        }
    }, {
        key: 'attachEndpoints',
        value: function attachEndpoints(app) {
            _serve_data2.default.attachEndpoints(app);
        }
    }, {
        key: 'useStatics',
        value: function useStatics(app, express) {
            app.use(express.static(_path2.default.join(__dirname, '../statics')));
        }
    }]);

    return Entry;
}();