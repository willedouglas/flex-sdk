"use strict";

module.exports = {
	"api_url"     : process.env.API_URL || "http://localhost:3030",
	"request_attempts": process.env.REQUEST_ATTEMPTS || 3,
};