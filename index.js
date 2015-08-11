#!/usr/bin/env node
"use strict";

var url = require("url");

var _ = require("highland"),
    handlebars = require("handlebars");

if (process.env.DATABASE_URL) {
  var uri = url.parse(process.env.DATABASE_URL, true);

  if (uri.protocol === "postgres:") {
    process.env.PGHOST = process.env.PGHOST || uri.hostname;
    process.env.PGPORT = process.env.PGPORT || uri.port || "";
    process.env.PGDATABASE = process.env.PGDATABASE || uri.pathname.slice(1);

    var auth = (uri.auth || "").split(":", 2);

    process.env.PGUSER = process.env.PGUSER || auth[0];
    process.env.PGPASSWORD = process.env.PGPASSWORD || auth[1] || "";

    // TODO other options from uri.query that match
    // http://www.postgresql.org/docs/9.3/interactive/libpq-envars.html
  }
}

_(process.stdin)
  .collect()
  .invoke("join", [""])
  .map(function(doc) {
    return handlebars.compile(doc)(process.env);
  })
  .pipe(process.stdout);
