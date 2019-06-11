'use strict';

const axios = require('axios');
var moment = require('moment');

const ChildController = {
	index: ( args ) => {
		const url = `https://zs6bxs0rfi.execute-api.us-east-1.amazonaws.com/dev/search-entity?role=hss&type=pa`;
		// auth-cds-token
		var token = 'eyJraWQiOiJXU2J6SFdrQWxPZUlzZnBpcFwvUW5YYThsMFFUdUI0emI3M0JGMlJCVnhcL2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJhdWQiOiIzMnV1Y2JlbWYwMWhsNzR2dHJoOGwwdmJxMiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImEwMGMzMzg5LWFjOWEtNDg2Yi05OWQxLTFlMTZiNDQyYzgxNSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTYwMjY4OTAxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92d2JXVjcyd28iLCJuYW1lIjoiSm9zZSIsImNvZ25pdG86dXNlcm5hbWUiOiIyZWQ1ZWU5OC0yZWEwLTQzOWItYTNkZS00ZTdkMjk3MjFkNDQiLCJleHAiOjE1NjAyNzI1MDEsImlhdCI6MTU2MDI2ODkwMX0.hKbTuTS47l4UrGGhNQEuQZXe8D49_0LbqpjuWZXncGovsc7rhFbwoYv126pQFUk9WKqyisA7H2mDmzCb8Vn3Iu1zqm2-41hv2UWejdld-IAYVPD54muEQa_BhQMkSPKdBESBqvwJMiROe2NT-fHr1jlpvp_3VKG7ILJTqrx9OjgTBudgjl8cO_mUtnmbtOD4Du4Y50eyn-MT4o8dWlrF2_nK4Y4PbquALpC8tZORyKOZ_v5m08D697tqDjJJ1U6fCuiAmWJx9gxLxTaMjRcPTTbMpjIL87xWfN0mQWkzX8cuVVB0GCfVl-K_p06czDMexj8WKZvKirQKfSVS3NyQuw';
		return axios({
			url,
			method: 'GET',
			headers: {
				'auth-cds-token': token
			}
		})
		.then(response => {
			console.log('SUCCESS!!!');
			const children = response.data.data.map( child => {
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
					program: child.program,
					age: moment().diff(child.resource.birthDate,'years')
				};
			});
			if(args.ages){
				return children.filter(child => args.ages.includes(child.age));
			}
			return children;
		})
		.catch( (error) => {
			console.log('ERROR ON REQUEST');
			console.log(JSON.stringify(error));
			return { error: error }
		});

	}


}

module.exports = ChildController;