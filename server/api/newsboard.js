'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'newsboards',
    urls: /* newsboards*/
        /* KICH BAN newsboards */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/newsboards/case1/newsboard_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/newsboards/case1/newsboard_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/newsboards/case1/newsboard_1.json',
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
            method: ['GET'],
            response: '/ddatasource/json/newsboards/case1/newsboard_2.json',
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
        }
        ]
});
