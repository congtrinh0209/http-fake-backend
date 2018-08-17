'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'serviceinfos',
  urls:
  [
    {
      params: '',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceinfos/case1/serviceinfos.json',
        statusCode: 200

      }
      ]
    },
    {
      params: '/statistics/domains',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceinfos/case1/domains.json',
        statusCode: 200

      }
      ]
    }
  ]
})