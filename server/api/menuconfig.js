'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'menuconfigs',
  urls: /* activities*/
    /* KICH BAN activities */
  [
    {
      params: '/todo',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/menuconfigs/menuconfigstodo.json',
        statusCode: 200

      }
      ]
    }
  ]
})