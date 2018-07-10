'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'officesites',
    urls: /* officesites*/
        /* KICH BAN officesites */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/officesites/case1/officesite_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/officesites/case1/officesite_5.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/officesites/case1/officesite_1.json',
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
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/officesites/case1/officesite_2.json',
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
            }]
        },
        {   
            params: '/3',
            requests: [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }] 
        },
        {   
            params: '/4',
            requests: [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }] 
        },
        /* KICH BAN /{id}/logo */
        {
            params: '/1/logo',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/officesites/case1/logo_1.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/officesites/case1/logo_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/2/logo',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/officesites/case1/logo_2.json',
                statusCode: 200
            },
            {
                method: 'POST',  
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
            params: '/3/logo',
            requests: 
            [{
                method: ['GET','POST'],
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
            params: '/4/logo',
            requests: 
            [
            {
                method: 'POST',
                response: '/ddatasource/json/officesites/case1/logo_4.json',
                statusCode: 200
            },
            {
                method: 'GET',  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]  
        },
        /* KICH BAN /{id}/preferences */
        {
            params: '/1/preferences',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/officesites/case1/preferences_list.json",
                statusCode: 200 
            },
            {
                method: ['POST'],
                response: "/ddatasource/json/officesites/case1/preferences_1.json",
                statusCode: 200 
            }
            ]  
        },
        {
            params: '/2/preferences',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/officesites/case1/preferences_list.json",
                statusCode: 200 
            },
            {
                method: ['POST'],
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
            params: '/3/preferences',
            requests: 
            [
            {
                method: ['GET','POST'],
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
            params: '/4/preferences',
            requests: 
            [
            {
                method: ['GET'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            },
            {
                method: ['POST'],
                response: "/ddatasource/json/officesites/case1/preferences_4.json",
                statusCode: 200 
            }
            ]  
        },
        /* KICH BAN /{id}/preferences/{key} */
        {
            params: '/{id}/preferences/1',
            requests: 
            [
            {
                method: ['PUT', 'PATCH'],
                response: "/ddatasource/json/officesites/case1/key_1.json",
                statusCode: 200  
            },
            {
                method: ['DELETE'],
                response: {},
                statusCode: 204
            }
            ]  
        },  
        {
            params: '/{id}/preferences/2',
            requests: 
            [
            {
                method: ['PUT', 'PATCH'],
                response: "/ddatasource/json/officesites/case1/key_2.json",
                statusCode: 200  
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
            params: '/{id}/preferences/3',
            requests: 
            [
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
            params: '/{id}/preferences/4',
            requests: 
            [
            {
                method: ['DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]  
        },  
        ]
});
