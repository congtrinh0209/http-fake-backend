'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'applicant',
    urls: 
        /* KICH BAN applicant */
        [ 
          {
            params: '',
            requests: 
            [
            {
              method: 'GET',  
              response: '/ddatasource/json/applicants/case1/applicant_list.json',
              statusCode: 200
            },
            {
              method: 'POST',  
              response: '/ddatasource/json/applicants/case1/applicant_1.json',
              statusCode: 200
            }
            ]
          }
        ]
});
