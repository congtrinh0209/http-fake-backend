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
      params: '/12201',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceinfos/case1/service_detail.json',
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
    },
    {
      params: '/statistics/levels',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/levels/case1/level_list.json',
        statusCode: 200

      }
      ]
    },
    {
      params: '/statistics/agencies',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceinfos/case1/agencies.json',
        statusCode: 200

      }
      ]
    },
    {
      params: '/6871/processes',
      requests:
      [
          {
              method: ['GET',],
              response: '/ddatasource/json/serviceopts/case1/serviceProcess.json',
              statusCode: 200
          }
      ]
    },
    {
      params: '/1671',
      requests:
      [
          {
            method: 'GET',
            response: '/ddatasource/json/serviceinfos/case1/service_detail.json',
            statusCode: 200
          }
      ]
    },
    {
      params: '/STNMTTNN01',
      requests:
      [
          {
            method: 'GET',
            response: '/ddatasource/json/serviceinfos/case1/fileTemplates.json',
            statusCode: 200
          }
      ]
    }
  ]
})