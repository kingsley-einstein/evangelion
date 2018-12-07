'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextSchema = new _mongoose.Schema({

    author: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        select: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    }
});

TextSchema.plugin(_mongoosePaginate2.default);

exports.default = TextSchema;