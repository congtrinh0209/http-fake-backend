'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'dossiertemplates',
    urls: /* fileattachs*/
        /* KICH BAN fileattachs */
        [
            {
                params: '',
                requests: 
                [{
                    method: 'GET',
                    response: '/ddatasource/json/dossiertemplates/case1/dossiertemplates.json',
                    statusCode: 200
    
                }
                ]
            },
        {
            params: '/MAU_HO_SO_01',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/dossiertemplates/case1/thhs.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/8901/parts',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/dossiertemplates/case1/dossierPartsAdmin.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/101-TPN2',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/dossiertemplates/case1/thhs.json',
                statusCode: 200

            }
            ]
        }
        ]
});
