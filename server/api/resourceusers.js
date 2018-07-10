'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'resourceusers',
    urls: /* workspaces*/
        /* KICH BAN workspaces */
        [
        {
            params: '',
            requests: 
            [
            {
                method: 'POST',  
                response: '/ddatasource/json/resourceusers/case1/resourceuser_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{className}/{classPK}',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/resourceusers/case1/resourceuser_list.json',
                statusCode: 200
            },
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/resourceusers/case1/user_list.json',
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
            params: '/{className}/{classPK}/duantv@gmail.com',
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
            params: '/{className}/{classPK}/hoatt@gmail.com',
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
            params: '/{className}/{classPK}/thanhtt@gmail.com',
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
                response: '/ddatasource/json/resourceusers/case1/resourceuser_list.json',
                statusCode: 200 
            }] 
        }
        ]
});
