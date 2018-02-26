const config = require('../../config.js');
const default_headers = require('../../comum/default_headers.js');
const request = require('../../comum/flex_request.js');

class Orders {
  constructor(company_id, token) {
    this.company_id = company_id;
    this.token = token;
    this.default_options = {
      'json': true,
      'headers': default_headers(this)
    };
  }

  listOrders(user_id) {
    const url = `${config.api_url}/${this.company_id}/service-orders/user/${user_id}`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }

  listOrder(user_id, service_id) {
    const url = `${config.api_url}/${this.company_id}/service-orders/user/${user_id}/${service_id}`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }
}
