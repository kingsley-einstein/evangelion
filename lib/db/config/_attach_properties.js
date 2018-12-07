'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._Text = exports._Message = exports._Comment = exports._Post = exports._Picture = exports._User = undefined;

var _User2 = require('../models/User');

var _User3 = _interopRequireDefault(_User2);

var _Picture2 = require('../models/Picture');

var _Picture3 = _interopRequireDefault(_Picture2);

var _Post2 = require('../models/Post');

var _Post3 = _interopRequireDefault(_Post2);

var _Comment2 = require('../models/Comment');

var _Comment3 = _interopRequireDefault(_Comment2);

var _Message2 = require('../models/Message');

var _Message3 = _interopRequireDefault(_Message2);

var _Text2 = require('../models/Text');

var _Text3 = _interopRequireDefault(_Text2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _User = exports._User = _mongoose2.default.model('User', _User3.default);
var _Picture = exports._Picture = _mongoose2.default.model('Picture', _Picture3.default);
var _Post = exports._Post = _mongoose2.default.model('Post', _Post3.default);
var _Comment = exports._Comment = _mongoose2.default.model('Comment', _Comment3.default);
var _Message = exports._Message = _mongoose2.default.model('Message', _Message3.default);
var _Text = exports._Text = _mongoose2.default.model('Text', _Text3.default);