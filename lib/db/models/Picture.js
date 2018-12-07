'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PictureSchema = new _mongoose.Schema({

    caption: String,
    data: String,
    mimeType: String,
    dateUploaded: {
        type: Date,
        default: Date.now()
    },
    owner: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'User',
        childPath: 'pictures'
    }
});

PictureSchema.plugin(_mongoosePaginate2.default);

exports.default = PictureSchema;