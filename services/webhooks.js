"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "webhooks",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		
		/**
		 * Target URL parameter
		 *
		 * @param {String} targetUrl
		 */

		register: {
			rest: `/register/${ctx.params.targetUrl}`,
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {

				return `Unique ID:, ${Date.now()}`;
			}
		},

		list: {
			rest: {
				method: "GET",
				path: "/list"
			},
			async handler() {
				return "";
			}
		},

		/**
		 * ID and New Targer URL parameters
		 *
		 * @param {String} id
		   @param {String} newTargetUrl
		 */

		update: {
			rest: `/update/${id}`,
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return "";
			}
		},

		/**
	 * IP Address parameter
	 * @param {String} ipAddress
	 */

		 trigger: {
			rest: {
				method: "GET",
				path: "/trigger"
			},
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return "";
			}
		},
	},

	/**
		 * ID parameter
		 *
		 * @param {String} id
		 */

		   update: {
			rest: `/delete/${id}`,
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return "";
			}
		},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
