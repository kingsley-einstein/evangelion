'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function () {
    function Post() {
        _classCallCheck(this, Post);
    }

    _createClass(Post, null, [{
        key: 'postSchema',
        value: function postSchema() {
            return new _mongoose.Schema({
                title: {
                    type: String,
                    required: true,
                    minlength: 8
                },
                content: {
                    type: String,
                    required: true,
                    minlength: 9
                },
                author: {
                    type: _mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                comments: [{
                    type: _mongoose.Schema.Types.ObjectId,
                    ref: 'Comment'
                }],
                date: {
                    type: Date,
                    default: Date.now()
                }
            });
        }
    }]);

    return Post;
}();

exports.default = Post;