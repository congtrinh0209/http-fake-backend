'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'levels',
    urls: /* levels*/
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/levels/case1/level_list.json',
                statusCode: 200

            }
            ]
        }
        ]
});
