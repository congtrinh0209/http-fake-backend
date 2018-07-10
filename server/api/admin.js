'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'admin',
    urls: [{
        params: '/serviceinfos',
        requests: [{
            method: 'GET',
            response: '/json-templates/frontend-web-admin/serviceinfos.json'
        }, {
            method: 'POST',
            response: '/json-templates/frontend-web-admin/serviceinfo.json',
            statusCode: 201
        }]
    }, {
        params: '/serviceinfos/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/serviceinfos/3',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: '/json-templates/frontend-web-admin/serviceinfo.json',
            statusCode: 200
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceinfos/{id}/filetemplates',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/filetemplates.json'
        }]
    }, {
        params: '/serviceinfos/2/filetemplates',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/empty_list.json'
        }]
    }, {
        params: '/filetemplates',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/filetemplates.json'
        }, {
            method: ['POST'],
            response: '/json-templates/frontend-web-admin/filetemplate.json',
            statusCode: 201
        }]
    }, {
        params: '/filetemplates/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            response: '/json-templates/frontend-web-admin/filetemplate.json'
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/filetemplates/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/filetemplates/{id}/download',
        requests: [{
            method: 'GET',
            response: {'download': true},
            statusCode: 200
        }]
    }, {
        params: '/filetemplates/2/download',
        requests: [{
            method: 'GET',
            response: {'download': false},
            statusCode: 404
        }]
    }, {
        params: '/dossiertemplates',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/dossiertemplates.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/dossiertemplates/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/dossiertemplates/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/dossiertemplates/{id}/dossierparts',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/dossierparts.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/dossiertemplates/2/dossierparts',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/empty_list.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/dossierparts/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/dossierparts/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceconfigs',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/serviceconfigs.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/serviceconfigs/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/serviceconfigs/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceconfigs/{id}/serviceoptions',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/serviceoptions.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/serviceconfigs/2/serviceoptions',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/empty_list.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceoptions/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/serviceoptions/2',
        requests: [{
            method: ['GET'],
            response: {
                message: "Not Found",
                statusCode: 404
            },
            statusCode: 404
        }, {
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceprocesses',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/serviceprocesses.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/serviceprocesses/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/serviceprocesses/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceprocesses/{id}/processsteps',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/processsteps.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/serviceprocesses/2/processsteps',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/empty_list.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/serviceprocesses/{id}/processactions',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/processactions.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/serviceprocesses/2/processactions',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/empty_list.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/processsteps/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/processsteps/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/processsteps/{id}/stepallowances',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/stepallowances.json'
        }]
    }, {
        params: '/processsteps/2/stepallowances',
        requests: [{
            method: ['GET'],
            response: '/json-templates/frontend-web-admin/empty_list.json'
        }, {
            method: ['POST'],
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/processactions/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/processactions/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }, {
        params: '/paymentconfigs',
        requests: [{
            method: 'GET',
            response: '/json-templates/frontend-web-admin/paymentconfigs.json'
        }, {
            method: 'POST',
            response: {},
            statusCode: 201
        }]
    }, {
        params: '/paymentconfigs/{id}',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 204
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 204
        }]
    }, {
        params: '/paymentconfigs/2',
        requests: [{
            method: ['PUT', 'PATCH'],
            response: {},
            statusCode: 401
        }, {
            method: 'DELETE',
            response: {},
            statusCode: 401
        }]
    }]
});