'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'notificationTemplates',
    urls: 
        /* KICH BAN notificationTemplates*/
        [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/notificationtemplates/case1/notificationtemplate_list.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/ACTIVITY-01',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/notificationtemplates/case1/notificationtemplate_ACTIVITY-01.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/ACTIVITY-02',
            requests: 
            [
            {
                method: ['GET'],
                response: '/ddatasource/json/notificationtemplates/case1/notificationtemplate_ACTIVITY-02.json',
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
            params: '/ACTIVITY-03',
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
            params: '/ACTIVITY-04',
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
        }
        ]
});
