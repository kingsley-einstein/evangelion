'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

var _runserver = require('./runserver');

var _runserver2 = _interopRequireDefault(_runserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', 9000);

_config.Entry.useStatics(app, _express2.default);

_config.Entry.bindViews(app);

_runserver2.default.run(app);