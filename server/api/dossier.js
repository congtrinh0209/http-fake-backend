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
            params: '/todo',
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
            params: '/77602',
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
            params: '/77602/payment',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/payment.json',
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
            params: '/77602/actions',
            requests: [{
                method: ['GET','PUT', 'PATCH', 'POST'],
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
            params: '/43488/actions',
            requests: [{
                method: ['GET','PUT', 'PATCH', 'POST'],
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
            params: '/44102/actions',
            requests: [{
                method: ['GET','PUT', 'PATCH', 'POST'],
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
            params: '/77602/documents',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/document.json',
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
            params: '/77602/syncs',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/dossier_syncs.json',
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
            params: '/77602/sequences',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/sequences.json',
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
        },
        {
            params: '/77602/logs',
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
        },
        {
            params: '/43508/logs',
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
        },
        {
            params: '/77602/nextactions',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/next_action.json',
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
            params: '/43488/nextactions',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/next_action.json',
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
            params: '/77602/reassign',
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
            params: '/77602/nextactions/1100',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/next_action_detail.json',
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
            params: '/77602/nextactions/22139',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/next_action_detail.json',
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
            params: '/77602/nextactions/22137',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/next_action_detail.json',
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
            params: '/77602/nextactions/22137/payload',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/payload.json',
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
            params: '/43488/nextactions/22139',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/next_action_detail.json',
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
    ]
})