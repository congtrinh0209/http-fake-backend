'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'worktimes',
    urls: /* worktimes*/
        /* KICH BAN worktimes */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/worktimes/case1/worktime_list.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['POST','PUT', 'PATCH'],
                response: '/ddatasource/json/worktimes/case1/worktime_1.json',
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
                method: ['POST','PUT', 'PATCH'],
                response: '/ddatasource/json/worktimes/case1/worktime_2.json',
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
                method: ['POST','DELETE','PUT', 'PATCH'],
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
                method: ['POST'],
                response: '/ddatasource/json/worktimes/case1/worktime_4.json',
                statusCode: 200
            },
            {
                method: ['DELETE','PUT', 'PATCH'],
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
