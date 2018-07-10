'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'contacts',
    urls: 
        /* KICH BAN contacts */
        [ 
        {
            params: '',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/contacts/case1/contact_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/contacts/case1/contact_6.json',
                statusCode: 200
            }
            ]
        },        
        {
            params: '/1',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],  
                response: '/ddatasource/json/contacts/case1/contact_2.json',
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
                method: ['GET'],  
                response: '/ddatasource/json/contacts/case1/contact_2.json',
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
            params: '/3',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],  
                response: '/ddatasource/json/contacts/case1/contact_3.json',
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
            params: '/4',
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
            params: '/5',
            requests: 
            [
            {
                method: ['GET','PUT', 'DELETE','PATCH'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
	{
            params: '/106',
            requests: 
            [
            {
                method: ['DELETE'],  
                response: 
                {
                },
                statusCode: 204 
            }
            ]
        },
        /* KICH BAN /{id}/grouplist */
        {
            params: '/1/grouplist',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/contacts/case1/grouplist_list.json',
                statusCode: 200
            },
            {
                method: ['POST'],  
                response: '/ddatasource/json/contacts/case1/grouplist_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/2/grouplist',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/contacts/case1/grouplist_2.json',
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
            params: '/3/grouplist',
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
            params: '/4/grouplist',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/contacts/case1/grouplist_4.json',
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
        },
        /* KICH BAN CHO {id}/grouplist/{contactid} */
        {
            params: '/{id}/grouplist/101',
            requests: 
            [
            {
                method: ['DELETE'],  
                response: {},
                statusCode: 204
            }
            ]
        },
        {
            params: '/{id}/grouplist/102',
            requests: 
            [
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
            params: '/{id}/grouplist/103',
            requests: 
            [
            {
                method: ['DELETE'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        }
        ]
});
