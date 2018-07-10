'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'comments',
    urls: /* DOCFILE*/
        /* search AND CREATE docfile SUCCEED */
        [
        {
            params: '/{className}/{classPK}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/comments/case1/comments_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '',
            requests: 
            [
            {
                method: 'POST',  
                response: '/ddatasource/json/comments/case1/comments_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/uploads',
            requests: 
            [
            {
                method: 'POST',  
                response: '/ddatasource/json/comments/case1/comments_2.json',
                statusCode: 200
            }
            ]
        },/* XOA VA SUA THANH CONG */
        {
            params: '/2501',
            requests: 
            [
            {
                method: 'PUT',  
                response: '/ddatasource/json/comments/case1/comments_3.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode:204

            }
            ]
        },
        {
            params: '/2701',
            requests: 
            [
            {
                method: 'PUT',  
                response: '/ddatasource/json/comments/case1/comments_3.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode:200

            }
            ]
        },
        {
            params: '/2801',
            requests: 
            [
            {
                method: 'PUT',  
                response: '/ddatasource/json/comments/case1/comments_3.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode:200

            }
            ]
        },  
        /* KHONG CO QUYEN XOA, QUYEN SUA */
        {
            params: '/2',
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
            params: '/3',
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
        {
            params: '/2701/upvotes',
            requests: 
            [
            {
                method: ['PUT'],
                response:'/ddatasource/json/comments/case1/comments_3.json',
                statusCode: 200 
            },
            {
                method: ['DELETE'],
                response: '/ddatasource/json/comments/case1/comments_3.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/2/upvotes',
            requests: 
            [
            {
                method: ['POST'],
                response:'/ddatasource/json/comments/case1/comments_2.json',
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
            params: '/3/upvotes',
            requests: 
            [
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
            params: '/4/upvotes',
            requests: 
            [
            {
                method: ['POST'],
                response:'/ddatasource/json/comments/case1/comments_4.json',
                statusCode: 200 
            },
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
        /* user1@gmail.com CO QUYEN XOA */
        {
            params: '/1/upvotes/user1@gmail.com',          
            requests: 
            [
            {
                method: 'DELETE',
                response: 
                {                    
                },
                statusCode:204
            }
            ]
        },/*user2@gmail.com KHONG CO QUYEN XOA */
        {
            params: '/1/upvotes/user2@gmail.com',          
            requests: 
            [              
            {  method: 'DELETE',
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403
            }
            ]
        },/* KHONG TON TAI COMMENT */
        {
            params: '/2/upvotes/{email}',
            requests: 
            [
            {
                method: 'DELETE',
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },/*TAI 1 TEP TIN DINH KEM */
        {
            params: '/1/download',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/comments/case1/comments_1.pdf',
                statusCode: 200
            }
            ]
        },/* TAI 1 TEP TIN ZIP */
        {
            params: '/2/download',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/comments/case1/comments_1.zip',
                statusCode: 200
            }
            ]
        }
        ]
});
