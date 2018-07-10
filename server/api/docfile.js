'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'docfiles',
    urls: /* DOCFILE*/
        /* KICH BAN DOCFILE SUCCEED */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/docfile_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/docfile_5.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/docfiles/case1/docfile_1.json',
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
            method: ['GET'],
            response: '/ddatasource/json/docfile/case1/docfile_2.json',
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
        /* KICH BAN LABEL TRONG DOCFILE */
        {
            params: '/1/labels',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/label_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/label_4.json',
                statusCode: 200
            }
            ]  
        }, 
        {
            params: '/2/labels',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/label_list.json',
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
            params: '/{id}/labels/1',
            requests: [
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
            params: '/{id}/labels/2',
            requests: [
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
            params: '/{id}/labels/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN ROLE TRONG DOCFILE */
        {
            params: '/1/roles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/role_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/role_6.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/{id}/roles/1',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docfiles/case1/role_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                 response: 
                 {
                    deleted: "true"
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/roles/2',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docfiles/case1/role_2.json',
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
            params: '/{id}/roles/3',
            requests: [
            {
                method: ['GET'],
                response:'/ddatasource/json/docfiles/case1/role_3.json',
                statusCode: 200
            },
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
            params: '/{id}/roles/4',
            requests: [            
            {
                method: ['GET','DELETE','PUT','PATCH'],
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
            params: '/{id}/roles/5',
            requests: [            
            {
                method: ['GET','DELETE','PUT','PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
       /* KICH BAN USER TRONG DOCFILE */
        {
            params: '/1/users',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/user_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/user_6.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/users/1',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docfiles/case1/user_1.json'
            },
            {
                method: ['DELETE'],
                 response: 
                 {
                    deleted: "true"
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/1/users/2',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docfiles/case1/user_2.json',
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
            params: '/1/users/3',
            requests: [
            {
                method: ['GET'],
                response:'/ddatasource/json/docfiles/case1/user_3.json',
                statusCode: 200
            },
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
            params: '/1/users/4',
            requests: [            
            {
                method: ['GET','DELETE','PUT','PATCH'],
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
            params: '/1/users/5',
            requests: [            
            {
                method: ['GET','DELETE','PUT','PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN LINK TRONG DOCFILE */
        {
            params: '/1/links',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/link_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/link_4.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/links/1',
            requests: [
            {
                method: ['DELETE'],
                 response: 
                 {
                    deleted: "true"
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/1/links/2',
            requests: [
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
            params: '/1/links/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN ATTACH FILE TRONG DOCFILE */
        {
            params: '/1/attachs',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docfiles/case1/attachs_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/attachs_5.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/attachs/1',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/attachs_1.pdf',
                statusCode: 200
            },
            {
                method: ['PUT'],
                response: '/ddatasource/json/docfiles/case1/attachs_1.json',
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
            params: '/1/attachs/2',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/attachs_2.zip',
                statusCode: 200
            },
            {
                method: ['PUT'],
                response: '/ddatasource/json/docfiles/case1/attachs_2.json',
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
            params: '/1/attachs/3',
            requests: [
            {
                method: ['GET','DELETE', 'PUT', 'PATCH'],
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
            params: '/1/attachs/4',
            requests: [
            {
                method: ['GET','DELETE', 'PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN DOWNLOAD TRONG DOCFILE */       
        {
            params: '/1/download',
            requests: [{
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/attachs_1.pdf',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/download',
            requests: [{
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/attachs_2.zip',
                statusCode: 200
            }
            ]
        },
        /* KICH BAN CHO APPROVAL TRONG DOCFILE */       
        {
            params: '/1/approval',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/approval_1.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: 
                {
                    code: 123, 
                    message: "Văn bản đã được phê duyệt bởi người khác"
                },
                statusCode: 409
            }
            ]  
        }, 
        {
            params: '/2/approval',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/approval_2.json',
                statusCode: 204
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docfiles/case1/approval_3.json',
                statusCode: 200
            }
            ]  
        },
        /* KICH BAN INPUTFORM */
        {
            params: '/1/inputform',
            requests: [
            {
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/docfiles/case1/inputform_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/inputform',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/inputform_2.json',
                statusCode: 200
            },
            {
                method: ['PUT','PATCH'],
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
            params: '/3/inputform',
            requests: 
            [            
            {
                method: ['GET','PUT','PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },        
        /* KICH BAN REPORTFORM */
        {
            params: '/1/reportform',
            requests: [
            {
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/docfiles/case1/reportform_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/reportform',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/reportform_2.json',
                statusCode: 200
            },
            {
                method: ['PUT','PATCH'],
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
            params: '/3/reportform',
            requests: 
            [            
            {
                method: ['GET','PUT','PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },
        /* KICH BAN FROMDATA */
        {
            params: '/1/formdata',
            requests: [
            {
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/docfiles/case1/formdata_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/formdata',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/formdata_2.json',
                statusCode: 200
            },
            {
                method: ['PUT','PATCH'],
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
                method: ['GET','PUT','PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },
        /* KICH BAN PREVIEW */
        {
            params: '/1/preview',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/preview_1.json',
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
        /* CHANGELOGS */
        {
            params: '/1/changelogs',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/docfiles/case1/changelog_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/2/changelogs',
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
            params: '/3/changelogs',
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
        {
            params: '/4/changelogs',
            requests: 
            [
            {
                method: ['GET'],
                response: 
                {                    
                },
                statusCode: 204 
            }
            ]
        }
        ]
});
