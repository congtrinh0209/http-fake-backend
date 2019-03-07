'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'dictcollections',
    urls: /* dictcollections*/
        /* KICH BAN dictcollections */
        [ 
        {
            params: '',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/dictcollections/case1/dictcollection_list.json',
                statusCode: 200
            },
            {
                method: 'POST',  
                response: '/ddatasource/json/dictcollections/case1/dictcollection_create.json',
                statusCode: 200
            }
            ]
        }, 
        /* KICH BAN /dictcollections/{code} */
        {
            params: '/DOCUMENT_TYPE',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],  
                response: '/ddatasource/json/dictcollections/case1/dictcollection_1.json',
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
            params: '/ACTIVITY_TYPE',
            requests: 
            [
            {
                method: ['GET', 'PATCH'],  
                response: '/ddatasource/json/dictcollections/case1/dictcollection_2.json',
                statusCode: 200
            },
            {
                method: ['DELETE','PUT'],  
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
            params: '/GOVERMENT_AGENCY',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],  
                response: '/ddatasource/json/dictcollections/case1/dictcollection_3.json',
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
            params: '/ADMINISTRATIVE_UNITS',
            requests: 
            [
            {
                method: ['GET','PUT','DELETE', 'PATCH'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },
        /* KICH BAN /{code}/dataforms */
        {
            params: '/ACTIVITY_TYPE/dataforms',
            requests: 
            [
            {
                method: ['GET','PUT'],  
                response: '/ddatasource/json/dictcollections/case1/dataforms_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/DOCUMENT_TYPE/dataforms',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dataforms_2.json',
                statusCode: 200
            },
            {
                method: ['PUT'],  
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
            params: '/GOVERMENT_AGENCY/dataforms',
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
            params: '/ADMINISTRATIVE_UNITS/dataforms',
            requests: 
            [
            {
                method: ['GET'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            },
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
        /* KICH BAN /{code}/dictgroups */
        {
            params: '/ACTIVITY_TYPE/dictgroups',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictgroup_list.json',
                statusCode: 200
            }
		,
            {
                method: ['POST'],  
                response: '/ddatasource/json/dictcollections/case1/dictgroup_2.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/DOCUMENT_TYPE/dictgroups',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictgroup_2.json',
                statusCode: 200
            },
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
            params: '/GOVERMENT_AGENCY/dictgroups',
            requests: 
            [
            {
                method: ['GET','POST'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            }
            ]
        },
        /*KICH BAN /{code}/dictgroups/{groupcode} */
        {
            params: '/{code}/dictgroups/ACTIVITY_GROUP',
            requests: 
            [
            {
                method: ['PUT'],  
                response: '/ddatasource/json/dictcollections/case1/dictgroup_3.json',
                statusCode: 200
            },
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
            params: '/{code}/dictgroups/DOCUMENT_GROUP',
            requests: 
            [  
            {
                method: ['PUT'],  
                response: '/ddatasource/json/dictcollections/case1/dictgroup_4.json',
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
            params: '/{code}/dictgroups/GOVERMENT_AGENCY_GROUP',
            requests: 
            [            
            {
                method: ['PUT','DELETE'],  
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
            params: '/{code}/dictgroups/ADMINISTRATIVE_UNITS_GROUP',
            requests: 
            [            
            {
                method: ['PUT','DELETE'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN /{code}/dictgroups/{groupcode}/dictitems */
        {
            params: '/ACTIVITY_TYPE/dictgroups/ACTIVITY_GROUP/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/group_dictitem_list.json',
                statusCode: 200
            },
            {
                method: ['POST','PUT'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_1.json',
                statusCode: 200
            }
            ]
        },  
        {
            params: '/ACTIVITY_TYPE/dictgroups/DOCUMENT_GROUP/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_document_list.json',
                statusCode: 200
            },
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
            params: '/GOVERMENT_AGENCY/dictgroups/GOVERMENT_AGENCY_GROUP/dictitems',
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
            params: '/ADMINISTRATIVE_UNITS/dictgroups/ADMINISTRATIVE_UNITS_GROUP/dictitems',
            requests: 
            [            
            {
                method: ['GET'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            },
            {
                method: ['POST'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_3.json',
                statusCode: 200
            }
            ]
        }, 
        /* KICH BAN /{code}/dictgroups/{groupcode}/dictitems/{itemcode} */
        {
            params: '/{code}/dictgroups/{groupcode}/dictitems/1',
            requests: 
            [
            {
                method: ['DELETE'],  
                response: {},
                statusCode: 204
            }
            ]
        },
        {
            params: '/{code}/dictgroups/{groupcode}/dictitems/2',
            requests: 
            [
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
            params: '/{code}/dictgroups/{groupcode}/dictitems/3',
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
        },
        /* KICH BAN /{code}/dictitems */
        {
            params: '/DOCUMENT_TYPE/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_document_list.json',
                statusCode: 200
            },
            {
                method: ['POST'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_document_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/GOVERNMENT_AGENCY/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_goverment_list.json',
                statusCode: 200
            },
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
            params: '/GOVERNMENT_AGENCY/dictgroups',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictgroup_goverment_list.json',
                statusCode: 200
            },
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
            params: '/ACTIVITY_TYPE/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_activity_list.json',
                statusCode: 200
            },
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
            params: '/ADMINISTRATIVE_REGION/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_region_list.json',
                statusCode: 200
            },
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
            params: '/DOSSIER_STATUS/dictitems',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_dossier_status.json',
                statusCode: 200
            },
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
            params: '/jexcel/backend.datamgt.service/org.opencps.datamgt.model.DictCollection/org.opencps.datamgt.service.DictCollectionLocalServiceUtil/collectionCode/dataForm',
            requests: 
            [
            {
                method: ['GET'],  
                response: '/ddatasource/json/dictcollections/case1/privacy.json',
                statusCode: 200
            },
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
        /*
        {
            params: '/ACTIVITY_TYPE/dictitems',
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
        */
        /* KICH BAN /{code}/dictitems/{itemcode} */

	/* create */
	{
            params: '/{code}/dictitems',
            requests: 
            [
            {
                method: ['POST'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_create.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{code}/dictitems/VBHC',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_1.json',
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
            params: '/{code}/dictitems/TASK',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/dictcollections/case1/dictitem_2.json',
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
            }
            ]
        },
	{
            params: '/{code}/dictitems/1',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/dictcollections/case1/dictitem_1.json',
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
            params: '/{code}/dictitems/3',
            requests: 
            [
            {
                method: ['GET','PUT', 'PATCH'],  
                response: '/ddatasource/json/dictcollections/case1/dictitem_3.json',
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
            params: '/{code}/dictitems/4',
            requests: 
            [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],  
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
            params: '/{code}/dictitems/5',
            requests: 
            [
            {
                method: ['GET','DELETE','PUT', 'PATCH'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404 
            }
            ]
        },
        /* KICH BAN /{code}/dictitems/{itemcode}/metadata */
        {
            params: '/{code}/dictitems/1/metadata',
            requests: 
            [
            {
                method: ['GET','POST'],  
                response: '/ddatasource/json/dictcollections/case1/metadata_1.json',
                statusCode: 200
            }
            ]
        },
        {
            params: '/{code}/dictitems/2/metadata',
            requests: 
            [
            {
                method: 'GET',  
                response: '/ddatasource/json/dictcollections/case1/metadata_2.json',
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
            params: '/{code}/dictitems/3/metadata',
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
            params: '/{code}/dictitems/4/metadata',
            requests: 
            [
            {
                method: ['GET'],  
                response: 
                {
                    code: 123, message: "Not found"
                },
                statusCode: 404
            },
            {
                method: ['POST'],  
                response: '/ddatasource/json/dictcollections/case1/metadata_4.json',
                statusCode: 200
            }
            ]
        },
        /* KICH BAN /{code}/dictitems/{itemcode}/metadata/{key} */
        {
            params: '/{code}/dictitems/{itemcode}/metadata/1',
            requests: 
            [
            {
                method: ['PUT'],  
                response: '/ddatasource/json/dictcollections/case1/metadata_key_1.json',
                statusCode: 200
            },
            {
                method: ['DELETE'],  
                response: {},
                statusCode: 204
            }
            ]
        },
        {
            params: '/{code}/dictitems/{itemcode}/metadata/2',
            requests: 
            [
            {
                method: ['PUT'],  
                response: '/ddatasource/json/dictcollections/case1/metadata_key_2.json',
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
            params: '/{code}/dictitems/{itemcode}/metadata/3',
            requests: 
            [
            {
                method: ['PUT','DELETE'],  
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
            params: '/{code}/dictitems/{itemcode}/metadata/4',
            requests: 
            [
            {
                method: ['PUT','DELETE'],  
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
