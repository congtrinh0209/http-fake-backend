'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'holidays',
    urls: /* holidays*/
        /* KICH BAN holidays */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/holidays/case1/holiday_list.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/2017-08-19',
            requests: [{
                method: ['POST','PUT', 'PATCH'],
                response: '/ddatasource/json/holidays/case1/holiday_1.json',
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
            params: '/2017-08-20',
            requests: [{
                method: ['POST','PUT', 'PATCH'],
                response: '/ddatasource/json/holidays/case1/holiday_2.json',
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
            params: '/2017-08-21',
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
        }
        ]
});
