"use strict";

var defaultPort = 12345;
var express = require('express');
var app = express();
var path = require('path');

require('dotenv').load({silent: true});
require('mkdirp')('./logs');

if (process.env.ENABLE_MEMWATCH === 'true') {
    require('./memwatchUtils')();
}

var PouchDB = require('pouchdb').defaults({prefix: 'dbs/'});

var pouch = require('./pouch')({
    pouchDbConfigPath: path.join(__dirname, 'config', 'pouchdb.json'),
    PouchDB: PouchDB
});

app.use('/dbs', pouch.router);

app.listen(defaultPort, function () {
    console.log('Server listening on port', defaultPort);

    // uncomment this line and let it run once to create a DB
    //PouchDB('abc').post({name: 'x'});
});
