'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'serverconfigs',
    urls:
    [
        {
            params: '',
            requests:
            [
                {
                    method: 'GET',
                    response: '/ddatasource/serverconfigs/serverconfigs_list.json',
                    statusCode: 200
                },
                {
                    method: 'POST',
                    response: '/ddatasource/serverconfigs/serverconfigs_1.json',
                    statusCode: 200
                }
            ]
        },
        {
            params: '/1',
            requests:
            [
                {
                    method: ["GET",'PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_1.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
                    response: {},
                    statusCode: 204
                }
            ]
        },
        {
            params: '/2',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_2.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/3',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_3.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/4',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_4.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/5',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_5.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/6',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_6.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/7',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_7.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/8',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_8.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/9',
            requests:
            [
                {
                    method: ['GET','PUT', 'PATCH'],
                    response: '/ddatasource/serverconfigs/serverconfigs_9.json',
                    statusCode: 200
                },
                {
                    method: 'DELETE',
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
            params: '/10',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/serverconfigs/serverconfigs_10.json',
                statusCode: 200
            },
            {
                method: ['DELETE','PUT', 'PATCH'],  
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
            params: '/11',
            requests: 
            [
            {
                method: ['GET','PUT', 'DELETE','PATCH'],  
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
            params: '/1/configs',
            requests:
            [
                {
                    method: ['GET',],
                    response: '/ddatasource/serverconfigs/configs_1.json',
                    statusCode: 200
                },
                {
                    method: ['POST',"PUT"],
                    response: '/ddatasource/serverconfigs/configs_2.json',
                    statusCode: 201
                }
            ]
        },
		{
            params: '/2/configs',
            requests:
            [
                {
                    method: ['GET',],
                    response: '/ddatasource/serverconfigs/configs_3.json',
                    statusCode: 200
                },
                {
                    method: ['POST',"PUT"],
                    response: '/ddatasource/serverconfigs/configs_4.json',
                    statusCode: 201
                }
            ]
        },
		{
            params: '/3/configs',
            requests:
            [
                {
                    method: ['GET',],
                    response: '/ddatasource/serverconfigs/configs_5.json',
                    statusCode: 200
                },
                {
                    method: ['POST',"PUT"],
                    response: '/ddatasource/serverconfigs/configs_6.json',
                    statusCode: 201
                }
            ]
        },
		{
            params: '/4/configs',
            requests:
            [
                {
                    method: ['GET',],
                    response: '/ddatasource/serverconfigs/configs_7.json',
                    statusCode: 200
                },
                {
                    method: ['POST',"PUT"],
                    response: '/ddatasource/serverconfigs/configs_8.json',
                    statusCode: 201
                }
            ]
        },
		{
            params: '/5/configs',
            requests:
            [
                {
                    method: ['GET',],
                    response: '/ddatasource/serverconfigs/configs_9.json',
                    statusCode: 200
                },
                {
                    method: ['POST',"PUT"],
                    response: '/ddatasource/serverconfigs/configs_10.json',
                    statusCode: 201
                }
            ]
        }

    ]
});