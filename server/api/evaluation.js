'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'evaluation',
    urls: /* jobpos*/
        /* KICH BAN jobpos */
        [

        {
            params: '/12101',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
            },
            {
                method: ['POST'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
            }
            ]
        }, 
        {   
            params: '/12301',
            requests: 
            [            
              {
                method: ['GET'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
              },
              {
                method: ['POST'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
              }
            ]
        },
        {   
            params: '/12302',
            requests: 
            [            
              {
                method: ['GET'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
              },
              {
                method: ['POST'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
              }
            ]
        },
        {   
            params: '/12305',
            requests: 
            [
              {
                method: ['GET'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
              },
              {
                method: ['POST'],
                response: '/ddatasource/json/evaluation/case1/evaluation_list.json',
                statusCode: 200
              }
            ] 
        }
        ]
});
