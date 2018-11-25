'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Picture = function () {
    function Picture() {
        _classCallCheck(this, Picture);
    }

    _createClass(Picture, null, [{
        key: 'pictureSchema',
        value: function pictureSchema() {
            return new _mongoose.Schema({
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
        }
    }]);

    return Picture;
}();

exports.default = Picture;