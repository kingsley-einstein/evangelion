'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('dotenv').config({ path: require('path').join(__dirname, '/.env') });

//console.log(process.env.SECRET);

var mongo_uri_for_dev = exports.mongo_uri_for_dev = process.env.Dev_Mongo;
var mongo_uri_for_prod = exports.mongo_uri_for_prod = process.env.Prod_Mongo;
var secret = exports.secret = process.env.SECRET;