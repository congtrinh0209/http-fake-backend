'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'resourceinvitations',
    urls: /* invitations*/
        /* KICH BAN invitations */
        [
            {
                params: '/{className}/{classPK}',
                requests: 
                [{
                    method: ['GET'],
                    response: '/ddatasource/json/invitation/case1/invitation_list.json',
                    statusCode: 200
                },
                {
                    method: ['PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_1.json',
                    statusCode: 200
                }
                ]
            },
            {
                params: '',
                requests: 
                [{
                    method: ['POST'],
                    response: '/ddatasource/json/invitation/case1/invitation_2.json',
                    statusCode: 200
                }
                ]
            },
            {
                params: '/1',
                requests: [{
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_1.json',
                    statusCode: 200
                },
                {
                    method: ['DELETE'],
                    response: 
                    {
                        
                    },
                    statusCode: 204 
                }
                ]
            }, 
            {
                params: '/2',
                requests: [{
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_2.json',
                    statusCode: 200
                },
                {
                    method: ['DELETE'],
                    response: 
                    {
                        
                    },
                    statusCode: 204 
                }
                ]
            },
            {
                params: '/3',
                requests: [{
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_1.json',
                    statusCode: 200
                },
                {
                    method: ['DELETE'],
                    response: 
                    {
                        
                    },
                    statusCode: 204 
                }
                ]
            },
            {
                params: '/4',
                requests: [{
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_2.json',
                    statusCode: 200
                },
                {
                    method: ['DELETE'],
                    response: 
                    {
                        
                    },
                    statusCode: 204 
                }
                ]
            },
            {
                params: '/7',
                requests: [{
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_2.json',
                    statusCode: 200
                },
                {
                    method: ['DELETE'],
                    response: 
                    {
                        
                    },
                    statusCode: 204 
                }
                ]
            },
            {
                params: '/8',
                requests: [{
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/json/invitation/case1/invitation_2.json',
                    statusCode: 200
                },
                {
                    method: ['DELETE'],
                    response: 
                    {
                        
                    },
                    statusCode: 204 
                }
                ]
            },
        ]
});
