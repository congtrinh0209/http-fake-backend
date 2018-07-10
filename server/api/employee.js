'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'employees',
    urls: /* employees*/
        /* KICH BAN employees */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/employee_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/employees/case1/employee_5.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/employees/case1/employee_1.json',
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
                response: '/ddatasource/json/employees/case1/employee_2.json',
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
        /*KICH BAN /{id}/photo */
        {
            params: '/1/photo',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/photo_1.json',
                statusCode: 200
            },
            {
                method: 'PUT',  
                response: '/ddatasource/json/employees/case1/photo_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/2/photo',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/photo_2.json',
                statusCode: 200
            },
            {
                method: 'PUT',  
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
            params: '/3/photo',
            requests: 
            [
            {
                method: ['GET','PUT'],  
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
            params: '/4/photo',
            requests: 
            [
            {
                method: 'PUT',
                response: '/ddatasource/json/employees/case1/photo_4.json',
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
        /* KICH BAN /{id}/jobpos */
        {
            params: '/1/jobpos',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/jobpos_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/employees/case1/jobpos_1.json',
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
            params: '/1/jobpos/1',
            requests: 
            [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/employees/case1/jobpos_1.json',
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
            params: '/2/jobpos',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/jobpos_list.json',
                statusCode: 200
            },
            {
                method: ['POST','DELETE'],  
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
            params: '/3/jobpos',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/jobpos_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/employees/case1/jobpos_3.json',
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
            params: '/4/jobpos',
            requests: 
            [
            {
                method: ['GET','POST','DELETE'],  
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
            params: '/5/jobpos',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/jobpos_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/employees/case1/jobpos_5.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]  
        },
        /* KICH BAN /{id}/attachs */
        {
            params: '/1/attachs',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/file_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/employees/case1/file_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/2/attachs',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/employees/case1/file_list.json',
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
            params: '/3/attachs',
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
        /* KICH BAN /{id}/attachs/{fileEntryId} */
        {
            params: '/{id}/attachs/1',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/employees/case1/file.pdf",
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
            params: '/{id}/attachs/2',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/employees/case1/file.zip",
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
            params: '/{id}/attachs/3',
            requests: 
            [
            {
                method: ['GET','DELETE'],
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
            params: '/{id}/attachs/4',
            requests: 
            [
            {
                method: ['GET','DELETE'],
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
                response: "/ddatasource/json/employees/case1/preferences_1.json",
                statusCode: 200 
            },
            {
                method: ['POST'],
                response: "/ddatasource/json/employees/case1/preferences_2.json",
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
                response: "/ddatasource/json/employees/case1/preferences_1.json",
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
                response: "/ddatasource/json/employees/case1/preferences_4.json",
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
                method: ['PUT','PATCH'],
                response: "/ddatasource/json/employees/case1/key_1.json",
                statusCode: 200 
            },
            {
                method: ['DELETE'],
                response:{},
                statusCode: 204 
            }
            ]  
        },
        {
            params: '/{id}/preferences/2',
            requests: 
            [
            {
                method: ['PUT','PATCH'],
                response: "/ddatasource/json/employees/case1/key_2.json",
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
                method: ['DELETE','PUT','PATCH'],
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
                method: ['DELETE','PUT','PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]  
        },
        /* KICH BAN /formscript */
        {
            params: '/formscript',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/employees/case1/formscript_1.json",
                statusCode: 200 
            }
            ]  
        },
        /* KICH BAN KO CO QUYEN DOC */
        /*
        {
            params: '/formscript',
            requests: 
            [
            {
                method: ['GET'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403  
            }
            ]  
        },
        */
        /* KICH BAN /{id}/formdata */
        {
            params: '/1/formdata',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/employees/case1/formdata_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/formdata',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/employees/case1/formdata_1.json',
                statusCode: 200
            },
            {
                method: ['PUT', 'PATCH'],
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
            params: '/3/formdata',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],
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
            params: '/4/formdata',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404  
            }
            ]
        }, 
        /* KICH BAN /{id}/preview */
        {
            params: '/1/preview',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/employees/case1/file.pdf',
                statusCode: 200  
            }
            ]
        }, 
        {
            params: '/2/preview',
            requests: 
            [
            {
                method: ['GET'],
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
            params: '/3/preview',
            requests: 
            [
            {
                method: ['GET'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404   
            }
            ]
        }, 
        /* KICH BAN /{id}/account */
        {
            params: '/1/account',
            requests: 
            [
            {
                method: ['POST'],
                response: '/ddatasource/json/employees/case1/account_1.json',
                statusCode: 200  
            }
            ]
        },
        {
            params: '/2/account',
            requests: 
            [
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
            params: '/3/account',
            requests: 
            [
            {
                method: ['POST'],
                response: 
                {
                    code: 123, 
                    message: "Tài khoản đã tồn tại"
                },
                statusCode: 409 
            }
            ]
        },
        /* KICH BAN /{id}/lock */
        {
            params: '/1/lock',
            requests: 
            [
            {
                method: ['POST'],
                response: '/ddatasource/json/employees/case1/lock_1.json',
                statusCode: 200  
            }
            ]
        },
        {
            params: '/2/lock',
            requests: 
            [
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
        }
        ]
});
