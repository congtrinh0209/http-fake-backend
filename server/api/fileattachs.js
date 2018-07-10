'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'fileattachs',
    urls: /* fileattachs*/
        /* KICH BAN fileattachs */
        [
        {
            params: '',
            requests: 
            [{
                method: 'POST',
                response: '/ddatasource/json/fileattachs/case1/fileattach_1.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/fileattachs/case1/fileattach_2.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/2',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
		response: 
		{
		    code: 123, 
		    message: "No permission"
		},
		statusCode: 403 
            },
            {
                method: ['DELETE'],
                response: 
		{
		    code: 123, 
		    message: "No permission"
		},
		statusCode: 403 
            }
            ]
        },
	{
            params: '/{className}/{classPK}',
            requests: [{
                method: ['GET'],
                response: '/ddatasource/json/fileattachs/case1/fileattach_list.json',
                statusCode: 200
            }
            ]
        }
        ]
});
