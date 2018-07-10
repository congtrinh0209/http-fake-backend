'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'activities',
    urls: /* activities*/
        /* KICH BAN activities */
    [
        {
            params: '',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/activity_list.json',
                statusCode: 200

            },
            {
                method: 'POST',  
                // response: {
                //     "code":412,"message":"{\"categoryName\":\"required\"}","description":"precondition Failed!","type":"required"
                // }, 
                response: '/ddatasource/json/contacts/case1/contact_6.json',
                statusCode: 200

            }
            ]
        },
        {
            params: '/1',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/activity_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/1701',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/activity_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },
        {
            params: '/1704',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/activity_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 200 
            }
            ]
        },  
        {   
            params: '/2',
            requests: [{
            method: ['GET'],
            response: '/ddatasource/json/activities/case1/activity_2.json',
            statusCode: 200
        },
        {
            method: ['DELETE','PUT', 'PATCH'],
            response: 
            {
                code: 123, 
                message: "No permission"
            },
            statusCode: 403 
        }]
        },
        {   
            params: '/3',
            requests: [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }] 
        },
        {   
            params: '/4',
            requests: [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }] 
        },
        {
            params: '/5',
            requests: [{
                method: ['GET','PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/activity_5.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
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
            params: '/1/labels',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/label_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/label_4.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/source/{className}/1301',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/source_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/source_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/source/{className}/1601',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/source_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/source_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/source/{className}/1701',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/source_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/source_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/1/invitations',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/invitation_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/invitation_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/1/invitations/2',
            requests: [
            {
                method: ['PUT', 'DELETE'],
                response: '/ddatasource/json/activities/case1/invitation_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1/invitations/3',
            requests: [
            {
                method: ['PUT', 'DELETE'],
                response: '/ddatasource/json/activities/case1/invitation_2.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1/invitations/7',
            requests: [
            {
                method: ['PUT', 'DELETE'],
                response: '/ddatasource/json/activities/case1/invitation_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/1/invitations/8',
            requests: [
            {
                method: ['PUT', 'DELETE'],
                response: '/ddatasource/json/activities/case1/invitation_2.json',
                statusCode: 200
            }
            ]
        },   
        {
            params: '/2/labels',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/label_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/{id}/labels/1',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/labels/2',
            requests: [
            {
                method: ['DELETE'],
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
            params: '/{id}/labels/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN WORKSPACE */
        {
            params: '/1/workspaces',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/workspace_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/workspace_4.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/workspaces',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/workspace_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/1/workspaces/1',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/1/workspaces/2',
            requests: [
            {
                method: ['DELETE'],
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
            params: '/1/workspaces/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN LINK */
        {
            params: '/1301/links',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/link_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/link_4.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/1601/links',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/link_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/1301/links/1701',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/links/2',
            requests: [
            {
                method: ['DELETE'],
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
            params: '/{id}/links/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN ROLE */
        {
            params: '/1/roles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/role_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/role_6.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/roles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/role_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/{id}/roles/1',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/roles/2',
            requests: [
            {
                method: ['DELETE'],
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
            params: '/{id}/roles/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN STATES */
        {
            params: '/1/states',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/state_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/state_4.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/states',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/state_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/{id}/states/1',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/states/2',
            requests: [
            {
                method: ['DELETE'],
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
            params: '/{id}/states/3',
            requests: [
            {
                method: ['DELETE'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
       /* KICH BAN participants */
        {
            params: '/1/participants',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/participant_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/participant_6.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/participants',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/participant_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/{id}/participants/1',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/activities/case1/participant_1.json'
            },
            {
                method: ['DELETE'],
                 response: 
                 {
                    deleted: "true"
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/participants/2',
            requests: [
            {
                method: ['GET','PUT','PATCH'],
                response: '/ddatasource/json/activities/case1/participant_2.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],
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
            params: '/{id}/participants/3',
            requests: [
            {
                method: ['GET'],
                response:'/ddatasource/json/activities/case1/participant_3.json',
                statusCode: 200
            },
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
        },
        {
            params: '/{id}/participants/4',
            requests: [            
            {
                method: ['GET','DELETE','PUT','PATCH'],
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
            params: '/{id}/participants/5',
            requests: [            
            {
                method: ['GET','DELETE','PUT','PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },   
        /*KICH BAN /{id}/files */
        {
            params: '/1/files',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/file_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/file_1.json',
                statusCode: 200
            }
            ]  
        },
        {
            params: '/2/files',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/file_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                rresponse: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]  
        },
        {
            params: '/3/files',
            requests: 
            [
            {
                method: ['GET','POST'],  
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]  
        },
        /* KICH BAN {id}/files/{fileEntryId} */
        {
            params: '{id}/files/101',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/activities/case1/file_1.pdf',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]  
        }, 
        {
            params: '{id}/files/102',
            requests: 
            [
            {
                method: 'GET',
                response: '/ddatasource/json/activities/case1/file_2.docx',
                statusCode: 200
            },
            {
                method: 'DELETE',  
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
            params: '{id}/files/103',
            requests: 
            [           
            {
                method: ['GET','DELETE'],  
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
            params: '{id}/files/104',
            requests: 
            [           
            {
                method: ['GET','DELETE'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]  
        }, 
        /* KICH BAN /{id}/albums */
        {
            params: '/1/albums',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/activities/case1/album_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/album_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/albums',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/activities/case1/album_list.json',
                statusCode: 200
            },
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
        },  
        {
            params: '/3/albums',
            requests: 
            [
            {
                method: ['GET','POST'],  
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
            params: '/4/albums',
            requests: 
            [
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/album_4.json',
                statusCode: 200
            },
            {
                method: 'GET',  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },
        /* KICH BAN /{id}/albums/{fileEntryId} */
        {
            params: '/{id}/albums/101',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/activities/case1/album_1.pdf',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode: 204
            }
            ]
        },
        {
            params: '/{id}/albums/102',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/activities/case1/album_2.docx',
                statusCode: 200
            },
            {
                method: 'DELETE',  
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
            params: '/{id}/albums/103',
            requests: 
            [
            {
                method: ['GET','DELETE'],  
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
            params: '/{id}/albums/104',
            requests: 
            [
            {
                method: ['GET','DELETE'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },
        /* KICH BAN /{id}/docfiles */
        {
            params: '/1/docfiles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/docfile_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/docfile_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/docfiles',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/docfile_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/3/docfiles',
            requests: 
            [
            {
                method: ['GET','POST'],  
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        },
        /* KICH BAN {id}/docfiles/{docFileId} */
        {
            params: '/{id}/docfiles/201',
            requests: 
            [
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/docfiles/202',
            requests: 
            [
            {
                method: 'DELETE',  
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
            params: '/{id}/docfiles/203',
            requests: 
            [
            {
                method: 'DELETE',  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },
        /* KICH BAN {id}/docarchives */
        {
            params: '/1/docarchives',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/docarchive_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/docarchive_1.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/docarchives',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/docarchive_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/3/docarchives',
            requests: 
            [
            {
                method: ['GET','POST'],  
                response: 
                {
                    code: 123, 
                    message: "No permission"
                },
                statusCode: 403 
            }
            ]
        }, 
        /* KICH BAN /{id}/docarchives/{docArchiveId} */
        {
            params: '/{id}/docarchives/201',
            requests: 
            [
            {
                method: 'DELETE',  
                response: 
                {
                    
                },
                statusCode: 204 
            }
            ]
        },
        {
            params: '/{id}/docarchives/202',
            requests: 
            [
            {
                method: 'DELETE',  
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
            params: '/{id}/docarchives/203',
            requests: 
            [
            {
                method: 'DELETE',  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },
        /* KICH BAN /{id}/checklists */
        {
            params: '/1/checklists',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/checklist_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/checklist_5.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/checklists',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/checklist_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/3/checklists',
            requests: 
            [
            {
                method: ['GET','POST'],  
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
            params: '/{id}/checklists/1',
            requests: 
            [{
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/checklist_1.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
                response: {},
                statusCode: 204
            }
            ]
        }, 
        {
            params: '/{id}/checklists/2',
            requests: 
            [{
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/checklist_2.json',
                statusCode: 200
            },
            {
                method: 'DELETE',  
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
            params: '/{id}/checklists/3',
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
        }, 
        {
            params: '/{id}/checklists/4',
            requests: 
            [
            {
                method: ['DELETE','PUT','PATCH'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        }, 
        /* KICH BAN {id}/checklists/{checklistId}/rating */
        {
            params: '/{id}/checklists/1/rating',
            requests: [
            {
                method: ['POST'],
                response: '/ddatasource/json/activities/case1/rating_1.json',
                statusCode: 200
            }         
            ]
        },
        {
            params: '/{id}/checklists/2/rating',
            requests: [
            {
                method: ['POST'],
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
            params: '/{id}/checklists/3/rating',
            requests: [
            {
                method: ['POST'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }         
            ]
        },
        /* KICH BAN /{id}/checklists/{checklistId}/doing */        
        {
            params: '/{id}/checklists/1/doing',
            requests: 
            [
            {
                method: ['PUT', 'PATCH'],
                response: '/ddatasource/json/activities/case1/doing.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{id}/checklists/2/doing',
            requests: 
            [
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
            params: '/{id}/checklists/3/doing',
            requests: 
            [
            {
                method: ['PUT', 'PATCH'],
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN /{id}/forms */
        {
            params: '/1/forms',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/form_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/activities/case1/form_5.json',
                statusCode: 200
            }
            ]
        }, 
        {
            params: '/2/forms',
            requests: 
            [{
                method: 'GET',
                response: '/ddatasource/json/activities/case1/form_list.json',
                statusCode: 200
            },
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
        }, 
        {
            params: '/3/forms',
            requests: 
            [
            {
                method: ['GET','POST'],  
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
            params: '/{id}/forms/1',
            requests: 
            [
            {
                method: 'DELETE',  
                response: {},
                statusCode: 204
            }
            ]
        }, 
        {
            params: '/{id}/forms/2',
            requests: 
            [
            {
                method: 'DELETE',  
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
            params: '/{id}/forms/3',
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
