"use strict";

module.exports = function (config) {
    var express = require('express');
    var router = new express.Router();
    var PouchDB = config.PouchDB;
    var mkdirp = require('mkdirp');
    var expressPouchDB = require('express-pouchdb')(PouchDB, {
        mode: 'custom',
        configPath: config.pouchDbConfigPath,
        overrideMode: {
            include: [
                'routes/changes',
                'routes/db'
            ]
        }
    });

    mkdirp(config.baseDir);

    router.use(expressPouchDB);

    return router;
};
