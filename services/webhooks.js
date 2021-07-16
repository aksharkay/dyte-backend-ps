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
		 * Welcome, a username
		 *
		 * @param {String} targetUrl
		 */

		register: {
			rest: `/${ctx.params.targetUrl}`,
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
				return "Hello Moleculer";
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} id
		   @param {String} newTargetUrl
		 */

		update: {
			rest: "/update",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Success`;
			}
		},

		delete: {
			rest: "/delete",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * @param {String} ipAddress
	 */

	 trigger: {
		rest: '/trigger',
		params: {
			name: "string"
		},
		/** @param {Context} ctx  */
		async handler(ctx) {
			return `Unique ID:, ${Date.now()}`;
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
