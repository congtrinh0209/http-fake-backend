'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'workingunits',
    urls: 
        /* KICH BAN workingunits */
        [ 
        {
            params: '',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/workingunits/case1/workingunit_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/workingunits/case1/workingunit_create.json',
                statusCode: 200
            }
            ]
        },        
        {
            params: '/1',
            requests: 
            [
            {
                method: ['PUT', 'PATCH'],  
                response: '/ddatasource/json/workingunits/case1/workingunit_1.json',
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
                method: ['PUT', 'PATCH'],  
                response: '/ddatasource/json/workingunits/case1/workingunit_2.json',
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
            params: '/3',
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
            params: '/4',
            requests: 
            [
            {
                method: ['PUT', 'DELETE','PATCH'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN /{id}/logo */
        {
            params: '/1/logo',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/workingunits/case1/logo_1.json',
                statusCode: 200
            },
            {
                method: ['POST'],  
                response: '/ddatasource/json/workingunits/case1/logo_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/2/logo',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/workingunits/case1/logo_2.json',
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
            params: '/3/logo',
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
            params: '/4/logo',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/workingunits/case1/workingunit_4.json',
                statusCode: 200
            },
            {
                method: ['POST'],  
                response: 
                {
                    code: 123, 
                    message: "Contact đã tồn tại"
                },
                statusCode: 409
            }
            ]
        }
        ]
});
