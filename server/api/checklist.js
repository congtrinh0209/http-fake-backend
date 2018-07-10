'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'checklists',
    urls: /* checklists*/     
        [        
        /* KICH BAN /{id}/checklists/todo */
        {
            params: '/todo',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/activities/case1/todo_list.json',
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
