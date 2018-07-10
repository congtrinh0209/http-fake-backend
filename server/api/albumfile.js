'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'albumfiles',
    urls: /* holidays*/
        /* KICH BAN holidays */
        [
        {
            params: '/{className}/{classPK}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/albumfiles/case1/albumfile_list.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '',
            requests: [
            {
                method: ['POST'],
                response: '/ddatasource/json/albumfiles/case1/albumfile_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/albumfiles/case1/albumfile_1.pdf'
            },
            {
                method: ['DELETE'],
                 response: 
                 {
                    deleted: "true"
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/2',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/albumfiles/case1/albumfile_1.pdf',
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
            requests: [            
            {
                method: ['GET','DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },        
        {
            params: '/top',
            requests: [            
            {
                method: ['GET'],
                response:'/ddatasource/json/albumfiles/case1/top.json',
                statusCode: 200
            }
            ]
        }
        ]
});
