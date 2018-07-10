'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'changelogs',
    urls: 
        /* KICH BAN changelogs */
        [ 
        {
            params: '/{className}/{classPK}',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/changelogs/case1/changelog_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/top',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/changelogs/case1/top_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/mine',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/changelogs/case1/mine_list.json',
                statusCode: 200
            }
            ]
        }
        ]
});
