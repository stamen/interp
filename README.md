# interp

Interpolate environment variables into [mustache](http://mustache.github.io/)
templates provided to `STDIN`.

## Special Environment Variables

* `DATABASE_URL` - if the protocol is `postgres`, this will be expanded into
  [`libpq`-recognized environment
  variables](http://www.postgresql.org/docs/9.3/interactive/libpq-envars.html),
  preferring those that have already been set.
