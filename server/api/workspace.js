'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'workspaces',
    urls: /* workspaces*/
        /* KICH BAN workspaces */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/workspaces/case1/workspace_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/workspaces/case1/workspace_create.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/workspaces/case1/workspace_1.json',
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
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/workspaces/case1/workspace_2.json',
                statusCode: 200
            },
            {
                method: ['DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }]
        },
        {   
            params: '/3',
            requests: [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }] 
        },
        {   
            params: '/4',
            requests: [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }] 
        },             
        /* KICH BAN {id}/users */
        {
            params: '/1/users',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/workspaces/case1/user_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/workspaces/case1/user_4.json',
                statusCode: 200
            }
            ]  
        }, 
        {
            params: '/{id}/users/1',
            requests: [
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
            params: '/{id}/users/2',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },
        {
            params: '/{id}/users/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN /{id}/roles */
        {
            params: '/1/roles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/workspaces/case1/role_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/workspaces/case1/role_4.json',
                statusCode: 200
            }
            ]  
        }, 
        {
            params: '/{id}/roles/1',
            requests: [
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
            params: '/{id}/roles/2',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },
        {
            params: '/{id}/roles/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        }
        ]
});
