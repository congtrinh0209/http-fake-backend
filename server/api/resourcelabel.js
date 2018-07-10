'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'resourcelabels',
    urls: /* DOCFILE*/
        /* search AND CREATE docfile SUCCEED */
        [
        {
            params: '/{className}/{classPK}',
            requests: 
            [{
                method: ['GET'],
                response: '/ddatasource/json/resourcelabels/case1/resourcelabel_list.json',
                statusCode: 200
            },
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/resourcelabels/case1/resourcelabel_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '',
            requests: 
            [{
                method: ['POST'],
                response: '/ddatasource/json/resourcelabels/case1/resourcelabel_2.json',
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
            }
            ]
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
            }
            ]
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
            }
            ]
        },
        {
            params: '/{className}/{classPK}/cloning/1',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/resourcelabels/case1/resourcelabel_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{className}/{classPK}/cloning/2',
            requests: 
            [
            {
                method: ['GET'],
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
            params: '/{className}/{classPK}/cloning/3',
            requests: 
            [
            {
                method: ['GET'],
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
