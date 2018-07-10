'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'docarchives',
    urls: /* DOCARCHIVES*/
        /* search AND CREATE docfile SUCCEED */
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/docarchive_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/docarchive_5.json',
                statusCode: 200
            }
            ]
        },
        /* BEGIN KICH BAN HAM READ */      
        {
            /* KICH BAN READ docarchive_1.json THANH CONG */
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/docarchives/case1/docarchive_1.json',
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
        /* KICH BAN READ docarchive_2.json THANH CONG */
        {   
            params: '/2',
            requests: [{
            method: ['GET'],
            response: '/ddatasource/json/docarchives/case1/docarchive_2.json',
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
        /* KICH BAN READ docarchive_3.json KHONG THANH CONG ERROR STATUSCODE = 403 */
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
        /* KICH BAN READ docarchive4.json KHONG THANH CONG ERROR STATUSCODE = 401 */
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
        /* KICH BAN LABEL TRONG DOCARCHIVE */
        {
            params: '/1/labels',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/label_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/label_4.json',
                statusCode: 200
            }
            ]  
        }, 
        {
            params: '/2/labels',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/label_list.json',
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
            params: '/1/labels/1',
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
            params: '/1/labels/2',
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
            params: '/1/labels/3',
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
        /* KICH BAN ROLE TRONG DOCARCHIVE */
        {
            params: '/1/roles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/role_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/role_4.json',
                statusCode: 200
            }
            ]  
        },        
        {
            params: '/1/roles/1',
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
            params: '/1/roles/2',
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
            params: '/1/roles/3',
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
        /* KICH BAN USER TRONG DOCARCHIVE */
        {
            params: '/1/users',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/user_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/user_4.json',
                statusCode: 200
            }
            ]  
        },        
        {
            params: '/1/users/1',
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
            params: '/1/users/2',
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
            params: '/1/users/3',
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
        /* KICH BAN CHO LINKS TRONG DOCARCHIVE */
        {
            params: '/1/links',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/link_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/link_6.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/links/1',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docarchives/case1/link_1.json',
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
            params: '/1/links/2',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docarchives/case1/link_2.json',
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
            params: '/1/links/3',
            requests: [
            {
                method: ['GET'],
                response:'/ddatasource/json/docarchives/case1/link_3.json',
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
            params: '/1/links/4',
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
            params: '/1/links/5',
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
        /* KICH BAN WORKSPACE TRONG DOCARCHIVE */
        {
            params: '/1/workspaces',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/workspace_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/workspace_4.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/workspaces/1',
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
            params: '/1/workspaces/2',
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
            params: '/1/workspaces/3',
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
        /* KICH BAN CHO PART TRONG DOCARCHIVE */
        {
            params: '/1/parts',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/part_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/part_6.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/parts/1',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docarchives/case1/part_1.json',
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
            params: '/1/parts/2',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/docarchives/case1/part_2.json',
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
            params: '/1/parts/3',
            requests: [
            {
                method: ['GET'],
                response:'/ddatasource/json/docarchives/case1/part_3.json',
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
            params: '/1/parts/4',
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
            params: '/1/parts/5',
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
        /* KICH BAN DOCFILE TRONG DOCARCHIVE */
        {
            params: '/1/docfiles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/docarchives/case1/docfile_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/docarchives/case1/docfile_4.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1/docfiles/1',
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
            params: '/1/docfiles/2',
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
            params: '/1/docfiles/3',
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
        }      
        ]
});
