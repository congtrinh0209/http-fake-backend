'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'vr-app',
    urls: /* DOCFILE*/
        /* search AND CREATE docfile SUCCEED */
        [
        {
            params: '/certnumbers/{classPK}',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/certnumbers/case1/certnumber_1.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: '/ddatasource/json/certnumbers/case1/certnumber_1.json',
                statusCode: 200
            },
            {
                method: 'PUT',  
                response: '/ddatasource/json/certnumbers/case1/certnumber_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/certnumbers',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/certnumbers/case1/certnumber_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/certnumbers/case1/certnumber_1.json',
                statusCode: 200
            }
            ]
        }
        ]
});
