'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'projects',
    urls: /* checklists*/     
        [        
        /* KICH BAN /{id}/checklists/todo */
        {
            params: '',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/projects/case1/project_list.json',
                statusCode: 200
            }
            ]
        }
        ]
});
