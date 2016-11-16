# express-pouchdb-memleak

A sample app to reproduce and visualize the memory leak problem with **express-pouchdb**
and `dbs/<db_name>/_changes` GET request. See https://github.com/pouchdb/express-pouchdb/issues/398.

## Setting up

Run `npm install` to install the required dependencies.

## Running

Create a database by uncommenting line 28 in index.js and run `node index`.
Stop the server, remove or comment back line 28 and run the server again.
Make sure that **dbs/** directory contains the **abc** database.


## Generating traffic

`ab -k -c 10 -n 20000 http://localhost:12345/dbs/abc/_changes`

## Output

The `memwatch` memory usage stats are logged to **logs/plot-memwatch.csv**.
