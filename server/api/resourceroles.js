'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'resourceroles',
    urls: /* workspaces*/
        /* KICH BAN workspaces */
        [
        {
            params: '',
            requests: 
            [
            {
                method: 'POST',  
                response: '/ddatasource/json/resourceroles/case1/resourcerole_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{className}/{classPK}',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/resourceroles/case1/resourcerole_list.json',
                statusCode: 200
            },
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/resourceroles/case1/role_list.json',
                statusCode: 200
            }
            ]
        }, 
        {   
            params: '/{className}/{classPK}/1',
            requests: 
            [            
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }]
        },        
        {   
            params: '/{className}/{classPK}/2',
            requests: 
            [            
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }]
        },        
        {   
            params: '/{className}/{classPK}/3',
            requests: 
            [            
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }]
        },        
        {   
            params: '/{className}/{classPK}/cloning/{sourcePK}',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/resourceroles/case1/resourcerole_list.json',
                statusCode: 200 
            }] 
        }
        ]
});
