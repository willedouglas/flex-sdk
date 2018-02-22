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

    const headers = default_headers();
    const options = { url, method, data, headers };
    return request(options);
  }
}

module.exports = Account;