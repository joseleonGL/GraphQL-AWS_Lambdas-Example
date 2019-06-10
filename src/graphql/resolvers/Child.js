'use strict';

const axios = require('axios');

const ChildController = {

	index: ( args ) => {

		const URL = `https://zs6bxs0rfi.execute-api.us-east-1.amazonaws.com/dev/search-entity?pageNumber=1&numItemsPerPage=200&role=hss&type=pa`;

		// auth-cds-token
		var token = 'eyJraWQiOiJXU2J6SFdrQWxPZUlzZnBpcFwvUW5YYThsMFFUdUI0emI3M0JGMlJCVnhcL2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJhdWQiOiIzMnV1Y2JlbWYwMWhsNzR2dHJoOGwwdmJxMiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjlhMTQ2Y2Y4LThiYjItMTFlOS04NWJiLThkODdjYjVjZjQ1MSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTYwMTkzNDgyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92d2JXVjcyd28iLCJuYW1lIjoiSm9zZSIsImNvZ25pdG86dXNlcm5hbWUiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJleHAiOjE1NjAxOTcwODIsImlhdCI6MTU2MDE5MzQ4Mn0.NWmVe17bdjfzW1vV650g7DjRezGe0vPCOZiN9VuM3LNj8m-SzVd6g9KRjBEtuzmDaC4Nbm9-M_xXcqV6x4bc97oYR6qOe8-of1JSmHC2XU76S-92wPWTHpNQ4D55xINZSw8hgOecqj5orqBO3hlL0Qo88ze4hH5R-QptoJFe0R2TVUPOTf2tl1c9OXPpUIfqKGxu7nEuMQBC9lVcy4hh8P7u4DHo_z_jH6YsUHiZ8_0y4TZviK0nxVm88zcfMCpAbGYbxUS6FQKkwSx4GnQyVp2LdOYD6UwzGjx19Hl0ip-6DpRU0-Gp7CO0rmtG5z6HdW8KtkKbxhRcHlPirOEShg';
		var config = {
			headers: {'auth-cds-token': token}
		};

		return axios.get( URL, {}, config )
			.then( (response) => {
				const children = response.data.data;
				return children.map( child => {
					return {
						...child.resource,
						txid: child.txid,
						state: child.state,
						ts: child.ts,
						status: child.status,
						name: child.name,
						givenName: child.resource.name[0].given,
						familyName: child.resource.name[0].family,
						active: child.resource.active === 'true',
						program: child.program
					};
				});
			})
			.catch( (error) => {
				return { error: error }
			});

	}


}

module.exports = ChildController;