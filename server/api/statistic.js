'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'statistic',
    urls: 
        [
        /* THONG KE VAN BAN */
        {
            params: '/docfilesbymonth/year/{y}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/statistics/case1/docfilesbymonth_list.json'
            }
            ]
        }, 
        {
            params: '/docfilesbytemplate',
            requests: 
            [{
                method: 'GET',  
                response: '/ddatasource/json/statistics/case1/docfilesbytemplate_list.json'
            }
            ]
        },
        /* THONG KE HOAT DONG */
        {
            params: '/todolist',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/statistics/case1/todolist_list.json'
            }
            ]
        }, 
        {
            params: '/checklist/year/{y}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/statistics/case1/checklist_list.json'
            }
            ]
        }, 
        {
            params: '/activitiesbymonth/year/{y}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/statistics/case1/activities_list.json'
            }
            ]
        }, 
        {
            params: '/activhoitiesbyuser/year/{y}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/statistics/case1/activhoities_list.json'
            }
            ]
        }, 
    ]
});
