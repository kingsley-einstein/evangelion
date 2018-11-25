'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, null, [{
        key: 'userSchema',
        value: function userSchema() {
            return new _mongoose.Schema({
                email: {
                    type: String,
                    required: true,
                    unique: true,
                    match: /([a-zA-Z]+|[0-9]+)(@)(\w+)(.com|.co.uk|.net)/
                },
                username: {
                    type: String,
                    required: true,
                    unique: true
                },
                password: String,
                pictures: {
                    type: [_mongoose.Schema.Types.ObjectId],
                    ref: 'Picture'
                },
                profilePic: {
                    type: _mongoose.Schema.Types.ObjectId,
                    ref: 'Picture'
                },
                isActive: Boolean,
                posts: {
                    type: [_mongoose.Schema.Types.ObjectId],
                    ref: 'Post',
                    select: false
                },
                comments: {
                    type: [_mongoose.Schema.Types.ObjectId],
                    ref: 'Comment',
                    select: false
                }
            });
        }
    }]);

    return User;
}();

exports.default = User;