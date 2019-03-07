'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'votings',
    urls: /* DOCFILE*/
        /* search AND CREATE docfile SUCCEED */
        [
        {
            params: '/{className}/{classPK}',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/votings/case1/votings_list.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/checkpermission',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/votings/case1/permision.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{className}/{classPK}/{email}',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/votings/case1/votings_list_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '',
            requests: 
            [
            {
                method: 'POST',  
                response: '/ddatasource/json/votings/case1/votings_1.json',
                statusCode: 200
            }
            ]
        },/* CAP NHAT Y KIEN THANH CONG */
        {
            params: '/1',
            requests: 
            [
            {
                method: 'PUT',  
                response: '/ddatasource/json/votings/case1/votings_2.json',
                statusCode: 200
            }
            ]
        },/* KHONG CO QUYEN CAP NHAT Y KIEN */
        {
            params: '/2',
            requests: 
            [
            {
                method: 'PUT',  
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },/* THEM NGUOI XIN Y KIEN THANH CONG */
        {
            params: '/101',
            requests: 
            [
            {
                method: 'POST',
                response: '/ddatasource/json/votings/case1/votings_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/102',
            requests: 
            [
            {
                method: 'POST',
                response: '/ddatasource/json/votings/case1/votings_1.json',
                statusCode: 200
            }
            ]
        },/* KHONG CO QUYEN THEM NGUOI XIN Y KIEN */
        {
            params: '/2/users',
            requests: 
            [
            {
                method: 'POST',
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },/* XOA Y KIEN THANH CONG, CAP NHAT KET QUA XIN Y KIEN THANH CONG */
        {
            params: '/{id}/users/1',
            requests: 
            [
            {
                method: 'DELETE',
                response: 
                {                  
                },
                statusCode: 204 
            },
            {
                method: 'PUT',
                response: '/ddatasource/json/votings/case1/votings_4.json',
                statusCode: 200
            }
            ]
        },/* KHONG CO QUYEN XOA Y KIEN, CAP NHAT Y KIEN */
        {
            params: '/{id}/users/2',
            requests: 
            [
            {
                method: ['DELETE','PUT','PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403
            }
            ]
        },/* Y KIEN KHONG TON TAI */
        {
            params: '/{id}/users/3',
            requests: 
            [
            {
                method: ['DELETE'],
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
