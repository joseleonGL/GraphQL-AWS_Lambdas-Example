'use strict';

const GraphQL = require('graphql');
const {
	GraphQLObjectType,
    GraphQLSchema,
} = GraphQL;


// import the query file we created
const PostQuery = require('./queries/Post');
const ChildQuery = require('./queries/Child');


// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: {
		posts: PostQuery.index(),
		children: ChildQuery.index(),
	},
});


// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
});