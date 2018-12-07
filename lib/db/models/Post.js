'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostSchema = new _mongoose.Schema({

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

PostSchema.plugin(_mongoosePaginate2.default);

exports.default = PostSchema;