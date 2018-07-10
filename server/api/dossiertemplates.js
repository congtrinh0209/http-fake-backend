'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'dossiertemplates',
    urls: /* fileattachs*/
        /* KICH BAN fileattachs */
        [
        {
            params: '/TT302011BGTVTTDTKXCG',
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
