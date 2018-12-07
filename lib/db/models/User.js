'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({

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
    isActive: {
        type: Boolean,
        default: false
    },
    posts: {
        type: [_mongoose.Schema.Types.ObjectId],
        ref: 'Post'
    },
    comments: {
        type: [_mongoose.Schema.Types.ObjectId],
        ref: 'Comment'
    },
    texts: {
        type: [_mongoose.Schema.Types.ObjectId],
        ref: 'Text'
    },
    receivedMessages: {
        type: [_mongoose.Schema.Types.ObjectId],
        ref: 'Message'
    },
    sentMessages: {
        type: [_mongoose.Schema.Types.ObjectId],
        ref: 'Message'
    }
});

UserSchema.plugin(_mongoosePaginate2.default);

exports.default = UserSchema;