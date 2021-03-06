'use strict';
var config = require('./config');
var Server = require('simple-npm-cache-proxy/server');
var server = Server(config);
var Updater = require('simple-npm-cache-proxy/updater');
var updater = Updater(config);
server.listen(7000);
updater.run();
