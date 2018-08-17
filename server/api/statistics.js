'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'statistics',
  urls:
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