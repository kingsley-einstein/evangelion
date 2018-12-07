'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user_query = require('../db/queries/_user_query');

var _user_query2 = _interopRequireDefault(_user_query);

var _post_query = require('../db/queries/_post_query');

var _post_query2 = _interopRequireDefault(_post_query);

var _picture_query = require('../db/queries/_picture_query');

var _picture_query2 = _interopRequireDefault(_picture_query);

var _message_query = require('../db/queries/_message_query');

var _message_query2 = _interopRequireDefault(_message_query);

var _comment_query = require('../db/queries/_comment_query');

var _comment_query2 = _interopRequireDefault(_comment_query);

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
            app.get('/users', _init.opts.passport.authenticate('jwt', { session: false }), _user_query2.default.findUser);
            app.get('/users/all', _init.opts.passport.authenticate('jwt', { session: false }), _user_query2.default.findAllUsers);
            app.post('/posts', _init.opts.passport.authenticate('jwt', { session: false }), _post_query2.default.createNew);
            app.get('/posts', _init.opts.passport.authenticate('jwt', { session: false }), _post_query2.default.findAll);
            app.get('/posts/specific', _init.opts.passport.authenticate('jwt', { session: false }), _post_query2.default.findOne);
            app.put('/posts/specific', _init.opts.passport.authenticate('jwt', { session: false }), _post_query2.default.edit);
            app.delete('/posts/specific', _init.opts.passport.authenticate('jwt', { session: false }), _post_query2.default.delete);
            app.post('/pictures', _init.opts.passport.authenticate('jwt', { session: false }), _picture_query2.default.create);
            app.get('/pictures', _init.opts.passport.authenticate('jwt', { session: false }), _picture_query2.default.findOne);
            app.get('/pictures/authors', _init.opts.passport.authenticate('jwt', { session: false }), _picture_query2.default.findAllByOwner);
            app.delete('/pictures', _init.opts.passport.authenticate('jwt', { session: false }), _picture_query2.default.delete);
            app.post('/messages', _init.opts.passport.authenticate('jwt', { session: false }), _message_query2.default.create);
            app.get('/messages', _init.opts.passport.authenticate('jwt', { session: false }), _message_query2.default.findAllByRecepient);
            app.get('/messages/sent', _init.opts.passport.authenticate('jwt', { session: false }), _message_query2.default.findAllByAuthor);
            app.delete('/messages', _init.opts.passport.authenticate('jwt', { session: false }), _message_query2.default.delete);
            app.delete('/messages/all', _init.opts.passport.authenticate('jwt', { session: false }), _message_query2.default.deleteAllByUser);
            app.post('/posts/comments', _init.opts.passport.authenticate('jwt', { session: false }), _comment_query2.default.create);
            app.get('/posts/comments', _init.opts.passport.authenticate('jwt', { session: false }), _comment_query2.default.findAllByPost);
            app.put('/posts/comments', _init.opts.passport.authenticate('jwt', { session: false }), _comment_query2.default.edit);
            app.delete('/posts/comments', _init.opts.passport.authenticate('jwt', { session: false }), _comment_query2.default.delete);
        }
    }]);

    return ServeData;
}();

exports.default = ServeData;