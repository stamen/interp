# interp

Interpolate environment variables into [mustache](http://mustache.github.io/)
YAML templates provided to `STDIN` and output them as JSON.

## Special Environment Variables

* `DATABASE_URL` - if the protocol is `postgres`, this will be expanded into
  [`libpq`-recognized environment
  variables](http://www.postgresql.org/docs/9.3/interactive/libpq-envars.html),
  preferring those that have already been set.

## TODO

* Eliminate the YAML assumption
  ([`js-yaml`'s](https://github.com/nodeca/js-yaml) binary doesn't know how to
  read from `STDIN`, at least in 3.1.0).
