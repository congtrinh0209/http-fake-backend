'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'dossiertemplates',
    urls: /* fileattachs*/
        /* KICH BAN fileattachs */
        [
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
