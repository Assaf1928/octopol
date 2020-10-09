var request = require('request');
const Sentry = require("@sentry/node");

Sentry.init({ dsn: "https://bee35735b7f34c0888452accdf17e0e4@o458448.ingest.sentry.io/5457509" })

const consumer = {
   ok: (req, res, next) => {

    return res.send(req.params.message)
   },

   err: (req, res, next) => {
    Sentry.captureException(req.params.message);
    return res.send('error sent sucessfully');
}

};

module.exports = consumer;