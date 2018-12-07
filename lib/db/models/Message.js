'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageSchema = new _mongoose.Schema({

    author: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        childPath: 'sentMessages'
    },
    recepient: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        childPath: 'receivedMessages'
    },
    messageTexts: {
        type: [_mongoose.Schema.Types.ObjectId],
        ref: 'Text'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isRead: {
        type: Boolean,
        default: false
    }
});

MessageSchema.plugin(_mongoosePaginate2.default);

exports.default = MessageSchema;