'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'projects1',
    urls: /* checklists*/     
        [        
        /* KICH BAN /{id}/checklists/todo */
        {
            params: '',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/checklistschecklists/case1/checklists_list.json',
                statusCode: 200
            },
            {
                method: 'POST',
                response: '/ddatasource/json/checklists/case1/checklists_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/checklists/case1/checklists_1.json',
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
            response: '/ddatasource/json/checklists/case1/checklists_1.json',
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
        {   
            params: '/1/activities',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/activities_list.json',
                statusCode: 200
            },
            {
                method: ['POST'],
                response: '/ddatasource/json/checklists/case1/activities_1.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/2/activities',
            requests: [
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/activities_list.json',
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
            params: '/3/activities',
            requests: [           
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
            params: '/{id}/activities/1',
            requests: [           
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/checklists/case1/activities_2.json',
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
            params: '/{id}/activities/2',
            requests: [           
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/checklists/case1/activities_2.json',
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
            params: '/{id}/activities/3',
            requests: [  
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
            params: '/{id}/activities/4',
            requests: [  
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
            params: '/1/links',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/links_list.json',
                statusCode: 200
            },
            {
                method: ['POST'],
                 response: '/ddatasource/json/checklists/case1/links_1.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/2/links',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/links_list.json',
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
            params: '/3/links',
            requests: [  
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
            params: '/{id}/links/1',
            requests: [  
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/checklists/case1/links_2.json',
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
            params: '/{id}/links/2',
            requests: [  
            {
                method: ['PUT','PATCH'],
                response: '/ddatasource/json/checklists/case1/links_2.json',
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
            params: '/{id}/links/3',
            requests: [  
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
            params: '/statistics/todo/{userid}',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/todo_list.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/statistics/byyears/{year}',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/byyears_list.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/statistics/year/{y}/byusers/{id}',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/byusers_list.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/statistics/year/{y}/bycategories/{code}',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/bycategories_list.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/statistics/year/{y}/byprojects/{projectNo}',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/byprojects_list.json',
                statusCode: 200
            }
            ] 
        }, 
        {   
            params: '/statistics/year/{y}/bymonths/{month}',
            requests: [  
            {
                method: ['GET'],
                response: '/ddatasource/json/checklists/case1/bymonths_list.json',
                statusCode: 200
            }
            ] 
        }, 
        /*
        {
            params: '/todo',
            requests: 
            [
            {
                method: 'GET',
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
        /* KICH BAN /todo/user/{id}*/
        {
            params: '/todo/user/1',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/activities/case1/todo_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/todo/user/2',
            requests: 
            [
            {
                method: 'GET',
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },
        ]
});
