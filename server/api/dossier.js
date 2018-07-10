'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'dossiers',
    urls: /* activities*/
        /* KICH BAN activities */
    [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/dossiers/case1/dossier_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                // response: {
                //     "code":412,"message":"{\"categoryName\":\"required\"}","description":"precondition Failed!","type":"required"
                // }, 
                response: '/ddatasource/json/dossiers/case1/dossier_1.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '77602',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/dossier_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/77602/submitting',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/dossier_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/47303/files',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/file_list.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/77602/files',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/file_list.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/47303/marks',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/marks.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/77602/marks',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/marks.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/dossierlogs/77602/logs',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/logs.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        }
    ]
})