"use strict";

module.exports = {
	"api_url" : process.env.API_URL || "http://api-flex.us-east-2.elasticbeanstalk.com",
	"request_attempts": process.env.REQUEST_ATTEMPTS || 3,
};