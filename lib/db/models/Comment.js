'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comment = function () {
    function Comment() {
        _classCallCheck(this, Comment);
    }

    _createClass(Comment, null, [{
        key: 'commentSchema',
        value: function commentSchema() {
            return new _mongoose.Schema({
                author: {
                    type: _mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                content: {
                    type: String,
                    required: true,
                    minlength: 8
                },
                post: {
                    type: _mongoose.Schema.Types.ObjectId,
                    ref: 'Post',
                    select: false
                },
                date: {
                    type: Date,
                    default: Date.now()
                }
            });
        }
    }]);

    return Comment;
}();

exports.default = Comment;