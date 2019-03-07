'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'serviceprocesses',
  urls:
  [
    {
      params: '',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses.json',
        statusCode: 200

      },
      {
        method: 'POST',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_detail2.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_detail.json',
        statusCode: 200

      },
      {
        method: 'PUT',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_detail2.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701/steps',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_steps.json',
        statusCode: 200
      },
      {
        method: 'POST',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_step_detail.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701/steps/140',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_step_detail.json',
        statusCode: 200
      },
      {
        method: ['PUT', 'DELETE'],
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_step_detail.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701/steps/140/roles',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_roles.json',
        statusCode: 200
      },
      {
        method: ['POST', 'DELETE'],
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_roles_detail.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701/actions',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_actions.json',
        statusCode: 200

      },
      {
        method: 'POST',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_actions_detail.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701/actions/429791',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_actions_detail.json',
        statusCode: 200

      },
      {
        method: ['PUT', 'DELETE'],
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_actions_detail.json',
        statusCode: 200
      }
      ]
    },
    {
      params: '/4701/roles',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_roles.json',
        statusCode: 200

      },
      {
        method: 'POST',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_roles_detail.json',
        statusCode: 200

      }
      ]
    },
    {
      params: '/4701/sequences',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_sequences.json',
        statusCode: 200

      },
      {
        method: 'POST',
        response: '/ddatasource/json/serviceprocesses/case1/serviceprocesses_sequences_detail.json',
        statusCode: 200

      }
      ]
    }
  ]
})