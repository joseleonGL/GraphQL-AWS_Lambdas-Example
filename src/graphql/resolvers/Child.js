'use strict';

const axios = require('axios');

const ChildController = {

	index: ( args ) => {

		const URL = `https://zs6bxs0rfi.execute-api.us-east-1.amazonaws.com/dev/search-entity?role=hss&type=pa`;

		// auth-cds-token
		var token = 'eyJraWQiOiJXU2J6SFdrQWxPZUlzZnBpcFwvUW5YYThsMFFUdUI0emI3M0JGMlJCVnhcL2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJhdWQiOiIzMnV1Y2JlbWYwMWhsNzR2dHJoOGwwdmJxMiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjI0YjgzZDM3LThiYmItMTFlOS1iNmJlLTliYThmYjJlYWY2YyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTYwMTk3MTUwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92d2JXVjcyd28iLCJuYW1lIjoiSm9zZSIsImNvZ25pdG86dXNlcm5hbWUiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJleHAiOjE1NjAyMDA3NTAsImlhdCI6MTU2MDE5NzE1MH0.Q44RD-PuCvHmL4qGNT6WXSExEptQ03IgurCmDOexF2FEkKwzcfDl5849nnspIiwLn2UOiOm06uDDbnZvpOWtW53NcFQ0jCaeJJSqYrdKOLW42b7R9k4BI1OvYMhpR6GapZS4-TDmONYLVrR0GKLNljMJKg7FdCXa11ePiZ4VnNTtNFfREekeSoGC-81Hm8X1S-rIDXLrgTsbhg7Sv-ZQqW3CLwJxEyNVpb5LQDJO1HG2LiqFYVWuzK5EJyhUfX1_Aaxc9vR29Nx-48T1NStNgkKtVeRFvERKe1a0P4bloMRULghf2iocm2KiLcJwpc4djkTKY1hNjAmAPsc6YBT-mg';
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