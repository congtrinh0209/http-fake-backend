'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'onegate',
    urls: /* activities*/
        /* KICH BAN activities */
    [
        {
            params: '/serviceconfigs/processes',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/serviceopts/case1/serviceopts_list.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/token',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/dossierOnegate/case1/token.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/dossierOnegate/case1/dossiers_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                // response: {
                //     "code":412,"message":"{\"categoryName\":\"required\"}","description":"precondition Failed!","type":"required"
                // }, 
                response: '/ddatasource/json/dossierOnegate/case1/dossier_1.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/77602',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossierOnegate/case1/dossier_1.json',
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
            params: '/57802',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/dossierOnegate/case1/dossier_1.json',
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