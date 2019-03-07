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
            params: '/43488',
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
            params: '/77602/payments/7c0882b8-9e9d-46b5-8622-fb24c851a6f5/epaymentprofile',
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
            params: '/77603/payments/7c0882b8-9e9d-46b5-8622-fb24c851a6f5/epaymentprofile',
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
            params: '/77603/payments/7c0882b8-9e9d-46b5-8622-fb24c851a6f5/confirmfile',
            requests: [{
                method: ['POST', 'PUT', 'GET'],
                response: '/ddatasource/json/dossiers/case1/paymentfile.json',
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
            params: '/77602/payments/7c0882b8-9e9d-46b5-8622-fb24c851a6f5/confirmfile',
            requests: [{
                method: ['POST', 'PUT', 'GET'],
                response: '/ddatasource/json/dossiers/case1/paymentfile.json',
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
                response: '/ddatasource/json/dossiers/case1/resDoAction.json',
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
            params: '/77603/files',
            requests: [{
                method: ['GET','PUT', 'PATCH', 'POST'],
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
            params: '/77603/files/9fd1e86c-f0e5-4a6a-9ffa-60a72450eb3e',
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
            params: '/77603/eforms/KQ1',
            requests: [{
                method: ['PUT', 'POST'],
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
            params: '/77603/eforms/KQ2',
            requests: [{
                method: ['PUT', 'POST'],
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
            params: '/77603/marks',
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
            params: '/77603/sequences',
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
            params: '/dossierlogs/77603/logs',
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
            params: '/43510/nextactions',
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
            params: '/77603/nextactions/9100/payload',
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
        {
            params: '/77603',
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
            params: '/43510',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/dossier_2.json',
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
            params: '/77603/submitting',
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
            params: '/77603/payment',
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
            params: '/77603/actions',
            requests: [{
                method: ['GET','PUT', 'PATCH', 'POST'],
                response: '/ddatasource/json/dossiers/case1/resDoAction.json',
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
            params: '/77603/reassign',
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
            params: '/77603/nextactions',
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
            params: '/77603/nextactions/1100',
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
            params: '/77603/nextactions/22139',
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
            params: '/77603/nextactions/22137',
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
            params: '/77603/nextactions/22137/payload',
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
            params: '/77603/users',
            requests: [{
                method: ['GET','PUT', 'POST'],
                response: '/ddatasource/json/dossiers/case1/user_asign.json',
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
            params: '/1232/files/73138a63-eb5f-c33f-9307-a958112d6c38/formscript',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/formscript.json',
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
            params: '/1232/files/73138a63-eb5f-c33f-9307-a958112d6c38/formdata',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/formscript.json',
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
            params: '/1232/files/73138a63-eb5f-c33f-9307-a958112d6c39/formdata',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/formdata.json',
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
            params: '/1232/files/73138a63-eb5f-c33f-9307-a958112d6c39/formscript',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/formdata.json',
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
            params: '/77603/applicant/1630730123/files/BM08_79_2012_ND_CP_TT50,TP2,TP3,TP4,TP5,TP6,KQ3,KQ2,KQ4/search',
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
            params: '/77603/mermaidgraph',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossiers/case1/mermaidgraph.json',
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
            params: '/77603/files/copyfile',
            requests: [{
                method: ['GET','PUT', 'PATCH', 'POST'],
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
        }
    ]
})