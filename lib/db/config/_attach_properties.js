'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._Comment = exports._Post = exports._Picture = exports._User = undefined;

var _User2 = require('../models/User');

var _User3 = _interopRequireDefault(_User2);

var _Picture2 = require('../models/Picture');

var _Picture3 = _interopRequireDefault(_Picture2);

var _Post2 = require('../models/Post');

var _Post3 = _interopRequireDefault(_Post2);

var _Comment2 = require('../models/Comment');

var _Comment3 = _interopRequireDefault(_Comment2);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_User3.default.userSchema().method('checkPassword', function (password, encrypted) {
    return _bcrypt2.default.compareSync(password, encrypted);
});

_Picture3.default.pictureSchema().method('edit', function (mimeType, data) {
    this.mimeType = mimeType;
    this.data = data;
});

_Post3.default.postSchema().method('edit', function (title, content) {
    this.title = title;
    this.content = content;
});

_Comment3.default.commentSchema().method('edit', function (comment) {
    this.content = comment;
});

_User3.default.userSchema().plugin(_mongoosePaginate2.default);
_Picture3.default.pictureSchema().plugin(_mongoosePaginate2.default);
_Post3.default.postSchema().plugin(_mongoosePaginate2.default);
_Comment3.default.commentSchema().plugin(_mongoosePaginate2.default);

var _User = exports._User = _mongoose2.default.model('User', _User3.default.userSchema());
var _Picture = exports._Picture = _mongoose2.default.model('Picture', _Picture3.default.pictureSchema());
var _Post = exports._Post = _mongoose2.default.model('Post', _Post3.default.postSchema());
var _Comment = exports._Comment = _mongoose2.default.model('Comment', _Comment3.default.commentSchema());