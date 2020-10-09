'use strict';

const controller = require('./controller');

module.exports = (app) => {
   app.route('/producer/:type/:message')
       .get(controller.producer);
};