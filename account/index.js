'use strict';

const config = require('../config.js');
const default_headers = require('../comum/default_headers.js');
const request = require('../comum/flex_request.js');

class Account {
  constructor(token) {
    this.token = token;
    this.default_options = {
      'json': true,
      'headers': default_headers(this)
    };
  }

  login(data) {
    data = data || {};
    const url = `${config.api_url}/authenticate`;
    const method = 'POST';

    const options = Object.assign({}, this.default_options, { url, method, data });
    return request(options);
  }

  getCompanies() {
    const url = `${config.api_url}/companies`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }

  getUserInformation(token) {
    const url = `${config.api_url}/authenticate/${token}`;
    const method = 'GET';

    const options = Object.assign({}, this.default_options, { url, method });
    return request(options);
  }
}

module.exports = Account;