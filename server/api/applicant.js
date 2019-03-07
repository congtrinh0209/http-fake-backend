'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'applicants',
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
          },
          {
            params: '/1/activate/1234',
            requests: 
            [
            {
              method: 'GET',  
              response: '/ddatasource/json/applicants/case1/applicant_active.json',
              statusCode: 200
            }
            ]
          },
          {
            params: '/ngsp/verify',
            requests: 
            [
            {
              method: 'GET',  
              response: '/ddatasource/json/applicants/case1/applicant_list.json',
              statusCode: 200
            },
            {
              method: 'POST',  
              response: '/ddatasource/json/applicants/case1/applicant_check.json',
              statusCode: 200
            }
            ]
          },
          {
            params: '/ngsp/0100109106',
            requests: 
            [
            {
              method: 'GET',  
              response: '/ddatasource/json/applicants/case1/applicant_infos.json',
              statusCode: 200
            }
            ]
          }
        ]
});
