'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'jobpos',
    urls: /* jobpos*/
        /* KICH BAN jobpos */
        [
        {
            params: '',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/jobpos/case1/jobpos_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/jobpos/case1/jobpos_3.json',
                statusCode: 200
            }
            /*
            ,{
                method: 'POST',  
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            */
            ]
        },
        {
            params: '/1',
            requests: 
            [
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/jobpos/case1/jobpos_1.json',
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
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/jobpos/case1/jobpos_2.json',
                statusCode: 200
            },
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
            params: '/3',
            requests: 
            [            
            {
                method: ['DELETE','PUT', 'PATCH'],
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
            params: '/4',
            requests: 
            [
            {
                method: ['DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ] 
        },
        {   
            params: '/{id}/permissions',
            requests: 
            [
            {
                method: ['get'],
                response: "/ddatasource/json/jobpos/case1/jobpos_permission_list.json",
                statusCode: 200 
            }
            ] 
        },
        {   
            params: '/{id}/works',
            requests: 
            [
            {
                method: ['get'],
                response: "/ddatasource/json/jobpos/case1/jobpos_work_list.json",
                statusCode: 200 
            }
            ] 
        }
        ]
});
