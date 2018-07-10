'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'statistics',
  urls: /* activities*/
    /* KICH BAN activities */
  [
    {
      params: '/dossiers/counting',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/statistics/case1/todolist_list.json',
        statusCode: 200

      }
      ]
    }
  ]
})