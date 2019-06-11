'use strict';

const axios = require('axios');
var request = require('request');

const ChildController = {

	index: ( args ) => {

		const url = `https://zs6bxs0rfi.execute-api.us-east-1.amazonaws.com/dev/search-entity?role=hss&type=pa`;

		// auth-cds-token
		var token = 'eyJraWQiOiJXU2J6SFdrQWxPZUlzZnBpcFwvUW5YYThsMFFUdUI0emI3M0JGMlJCVnhcL2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJhdWQiOiIzMnV1Y2JlbWYwMWhsNzR2dHJoOGwwdmJxMiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjExNzgwMDViLWQ3MGQtNDNiOC1hNmU3LWU4YmY1ZTZlMGM3YSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTYwMjY2NDI1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92d2JXVjcyd28iLCJuYW1lIjoiSm9zZSIsImNvZ25pdG86dXNlcm5hbWUiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJleHAiOjE1NjAyNzAwMjUsImlhdCI6MTU2MDI2NjQyNX0.RPymC--RRNna5l7ETdExyA8E2_1ix-g-KTLJJFSJUVI441ihTu_qf5qQjyq6Eg8pIUj-qWwYJgC8zjR4VIkkiJ4xvHdL0RYo2esSsnZj9gLQ6ZD9qUjErw8sttnhhru1DG_1JhriHjKHNTVjRZq1rz5rKNK4G7aeA45Irjy7jgb4wYJyxWrsIAZ26SjB0WRLbzAEkLida_9gobWqtfVJ1dqQLjPMDn7lbqrg4vgZ8IDlCVgLdeJA_0BZbfvAebMYrV71HH6niYR-vgfLyOAPTyXI2zKMVGiO9yQ7T2mcOELmmtTT67DSn3XGl-hb0Xq2yydXrvYYJl7ahHe5ZxdHxA';
		var config = {
			headers: {'auth-cds-token': token}
		};

		return axios({
			url,
			method: 'GET',
			headers: {
				'auth-cds-token': token
			}
		})
			.then( (response) => {
				console.log('SUCCESS!!!');
				const children = response.data.data;
				return children.map( child => {
					return {
						...child.resource,
						txid: child.txid,
						state: child.state,
						ts: child.ts,
						status: child.status,
						name: child.name,
						givenName: child.resource.name[0].given[0],
						familyName: child.resource.name[0].family,
						active: child.resource.active === 'true',
						program: child.program
					};
				});
			})
			.catch( (error) => {
				console.log('ERROR ON REQUEST');
				console.log(JSON.stringify(error));
				return { error: error }
			});

	}


}

module.exports = ChildController;