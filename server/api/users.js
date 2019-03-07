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
                response: '/ddatasource/json/users/case1/user_1.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/users/case1/user_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/113',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/users/case1/user_1.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/avatar/org.opencps.usermgt.model.Employee/2429',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/users/case1/avatar.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/congtrinh0209@gmail.com/forgot',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/users/case1/user_1.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/congtrinh0209@gmail.com/forgot/confirm/1234',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/users/case1/user_1.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/login',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/users/case1/user_role.json',
                statusCode: 200

            }
            ]
        }

	
        ]
});
