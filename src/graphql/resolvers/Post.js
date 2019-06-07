'use strict';

const axios = require('axios');

const PostsController = {

	index: ( args ) => {

		const URL = `https://www.reddit.com/r/${ args.subreddit || 'javascript' }.json`;

		return axios.get( URL )
			.then( (response) => {
				const posts = response.data.data.children;
				return posts.map( post => {
					post.data.content = post.data.selftext_html;
					return post.data;
				});
			})
			.catch( (error) => {
				return { error: error }
			});

	}


}

module.exports = PostsController;