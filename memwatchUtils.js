"use strict";

module.exports = function () {
    var memwatch = require('memwatch-next');
    var heapDiff = new memwatch.HeapDiff();
    var firstLine = true;

    console.log('Enabling memwatch.');

    memwatch.on('leak', function (info) {
        console.log('memwatch.on(LEAK):', JSON.stringify(info));
    });

    memwatch.on('stats', function (stats) {
        var diff = heapDiff.end();
        var fs = require('fs');
        var filename = './logs/plot-memwatch.csv';

        heapDiff = new memwatch.HeapDiff();

        console.log('memwatch.on(STATS) HeapDiff:', JSON.stringify(diff, null, 2));
        console.log('memwatch.on(STATS):', JSON.stringify(stats));

        if (firstLine) {
            fs.appendFileSync(filename, stats.num_full_gc + ',' + stats.current_base + '\n');
            firstLine = false;
        } else {
            fs.appendFile(filename, stats.num_full_gc + ',' + stats.current_base + '\n');
        }
    });    
};
