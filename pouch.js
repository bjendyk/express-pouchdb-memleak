"use strict";

module.exports = function (config) {
    var _ = require('lodash');
    var defaultConfig = {
        pouchDbConfigPath: undefined,
        baseDir: 'dbs/'
    };

    config = _.extend(defaultConfig, config);

    return {
        router: require('./router')(config)
    };
};
