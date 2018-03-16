"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/flex_request.js");

class ServiceOrders {
	constructor(company_id, token) {
		this.company_id = company_id;
		this.token = token;
		this.default_options = {
			"json": true,
			"headers": default_headers(this)
		};
	}

	listOrders(user_id) {
		const url = `${config.api_url}/${this.company_id}/service-orders/user/${user_id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	listOrder(user_id, service_id) {
		const url = `${config.api_url}/${this.company_id}/service-orders/user/${user_id}/${service_id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	listAppointments(service_id) {
		const url = `${config.api_url}/${this.company_id}/service-orders/${service_id}/appointments`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	listAppointment(service_id, appointment_id) {
		const url = `${config.api_url}/${this.company_id}/service-orders/${service_id}/appointments/${appointment_id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	listExpenses(service_id) {
		const url = `${config.api_url}/${this.company_id}/service-orders/${service_id}/expenses`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	listExpense(service_id, expense_id) {
		const url = `${config.api_url}/${this.company_id}/service-orders/${service_id}/expenses/${expense_id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	listExpensesTypes() {
		const url = `${config.api_url}/${this.company_id}/service-orders/expenses/types`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
}

module.exports = ServiceOrders;