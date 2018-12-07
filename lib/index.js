'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _environment = require('./environment');

var _config = require('./config');

var _runserver = require('./runserver');

var _runserver2 = _interopRequireDefault(_runserver);

var _runmongoose = require('./runmongoose');

var _runmongoose2 = _interopRequireDefault(_runmongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require('dotenv').config();

var app = (0, _express2.default)();

app.set('port', 9000);

app.set('env', 'development');

_config.Entry.useMiddleWares(app);

_config.Entry.attachEndpoints(app);

_config.Entry.useStatics(app, _express2.default);

_config.Entry.bindViews(app);

_runmongoose2.default.run(app, _environment.mongo_uri_for_dev, _environment.mongo_uri_for_prod);

_runserver2.default.run(app);