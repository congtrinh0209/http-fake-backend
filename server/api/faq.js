'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'faq',
    urls: /* faq*/
        /* KICH BAN faq */
        [

        {
            params: '/questions',
            requests: 
            [
            {
                method: ['GET','PUT','DELETE'],
                response: '/ddatasource/json/faq/case1/question_list.json',
                statusCode: 200
            },
            {
                method: ['POST'],
                response: '/ddatasource/json/faq/case1/question_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/questions/101',
            requests: 
            [
            {
                method: ['PUT','DELETE'],
                response: '/ddatasource/json/faq/case1/question_list.json',
                statusCode: 200
            }
            ]
        }, 
        {   
            params: '/questions/101/answers',
            requests: 
            [            
              {
                method: ['GET','PUT','DELETE'],
                response: '/ddatasource/json/faq/case1/answer_list.json',
                statusCode: 200
              },
              {
                method: ['POST'],
                response: '/ddatasource/json/faq/case1/answer_list.json',
                statusCode: 200
              }
            ]
        },
        {
            params: '/questions/101/answers/1',
            requests: 
            [
            {
                method: ['PUT','DELETE'],
                response: '/ddatasource/json/faq/case1/question_list.json',
                statusCode: 200
            }
            ]
        }, 
        {   
            params: '/questions/102/answers',
            requests: 
            [            
              {
                method: ['GET','PUT','DELETE'],
                response: '/ddatasource/json/faq/case1/answer_list.json',
                statusCode: 200
              },
              {
                method: ['POST'],
                response: '/ddatasource/json/faq/case1/answer_list.json',
                statusCode: 200
              }
            ]
        }
        ]
});
