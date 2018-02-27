'use strict';
const config = require('../config.js');
const default_headers = require('../comum/default_headers.js');
const request = require('../comum/flex_request.js');

const Orders = require('./service/orders.js');

class Account {
  constructor(company_id, token) {
    this.company_id = company_id;
    this.token = token;
    this.default_options = {
      'json': true,
      'headers': default_headers(this)
    };
  }

  getCompanies() {
    const url = `${config.api_url}/companies`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }

  getCompany() {
    const url = `${config.api_url}/${this.company_id}`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }

  getUserInformation() {
    const url = `${config.api_url}/${this.company_id}/authenticate/${this.token}`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }

  login(data) {
    data = data || {};
    const url = `${config.api_url}/${this.company_id}/authenticate`;
    const method = 'POST';

    const options = Object.assign({}, this.default_options, { url, method, data });
    return request(options);
  }

  get orders() {
    return new Orders(this.company_id, this.token);
  }
}

module.exports = Account;