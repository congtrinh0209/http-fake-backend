'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'resourcetags',
    urls: /* DOCFILE*/
        /* search AND CREATE docfile SUCCEED */
    [
        {
            params: '',
            requests: 
            [{
                method: ['GET'],
                response: '/ddatasource/json/resourcetags/case1/resourcetag_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/resourcetags/case1/resourcetag_2.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{className}/{classPK}',
            requests: 
            [{
                method: ['GET'],
                response: '/ddatasource/json/resourcetags/case1/resourcetag_list_pk.json',
                statusCode: 200
            },
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/resourcetags/case1/resourcetag_1.json',
                statusCode: 200
            }
            ]
        },

        {
            params: '/101',
            requests: 
            [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 200, 
                    message: "No permission"
                },
                statusCode: 200
            }
            ]
        },
        {
            params: '/102',
            requests: 
            [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 200, 
                    message: "No permission"
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/103',
            requests: 
            [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 200, 
                    message: "No permission"
                },
                statusCode: 200
            }
            ]
        },
        {
            params: '/107',
            requests: 
            [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 200, 
                    message: "No permission"
                },
                statusCode: 200 
            }
            ]
        },
        
    ]
});