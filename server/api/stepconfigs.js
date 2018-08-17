'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'stepconfigs',
    urls: 
        [
        {
            params: '/done/done_5',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/stepconfigs/case1/buttonconfigs.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                // response: {
                //     "code":412,"message":"{\"categoryName\":\"required\"}","description":"precondition Failed!","type":"required"
                // }, 
                response: '/ddatasource/json/stepconfigs/case1/buttonconfigs.json',
                statusCode: 200
    
            }
            ]
        }
        
        ]
})
