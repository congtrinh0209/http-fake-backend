'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'partners',
    urls: /* partners*/
        /* KICH BAN partners */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/partners/case1/partner_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/partners/case1/partner_5.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/partners/case1/partner_1.json',
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
                response: '/ddatasource/json/partners/case1/partner_2.json',
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
        /* KICH BAN /{id}/files */
        {
            params: '/1/files',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/partners/case1/file_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/partners/case1/file_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/2/files',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/partners/case1/file_list.json',
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
            params: '/3/files',
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
        /* KICH BAN /{id}/files/{fileEntryId} */
        {
            params: '/{id}/files/1',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/partners/case1/file.pdf",
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
            params: '/{id}/files/2',
            requests: 
            [
            {
                method: ['GET'],
                response: "/ddatasource/json/partners/case1/file.zip",
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
            params: '/{id}/files/3',
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
            params: '/{id}/files/4',
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
                response: "/ddatasource/json/partners/case1/preferences_1.json",
                statusCode: 200 
            },
            {
                method: ['POST'],
                response: "/ddatasource/json/partners/case1/preferences_2.json",
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
                response: "/ddatasource/json/partners/case1/preferences_1.json",
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
                response: "/ddatasource/json/partners/case1/preferences_4.json",
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
                response: "/ddatasource/json/partners/case1/key_1.json",
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
                response: "/ddatasource/json/partners/case1/key_2.json",
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
                response: "/ddatasource/json/partners/case1/formscript_1.json",
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
                response: '/ddatasource/json/partners/case1/formdata_1.json',
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
                response: '/ddatasource/json/partners/case1/formdata_1.json',
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
                response: '/ddatasource/json/partners/case1/file.pdf',
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
                response: '/ddatasource/json/partners/case1/account_1.json',
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
                response: '/ddatasource/json/partners/case1/lock_1.json',
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
