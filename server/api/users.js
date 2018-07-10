'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'users',
    urls: /* users*/
        /* KICH BAN users */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/users/case1/user_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/users/case1/user_1.json',
                statusCode: 200
            }
            ]
        }

	
        ]
});
