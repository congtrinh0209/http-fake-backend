'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'initdata',
  urls: /* activities*/
    /* KICH BAN activities */
  [
    {
      params: 'p_p_id=OneGate&p_p_lifecycle=2&p_p_state=exclusive&p_p_mode=view&p_p_resource_id=renderURLInit',
      requests: 
      [{
        method: 'GET',
        response: '/ddatasource/json/initdata/initdata.json',
        statusCode: 200

      }
      ]
    }
  ]
})