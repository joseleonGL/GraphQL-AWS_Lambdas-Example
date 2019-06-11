'use strict';

const GraphQL = require('graphql');
const {
	GraphQLList,
	GraphQLInt,
} = GraphQL;

// import the Post type we created
const ChildType = require('../types/Child');

// import the Post resolver we created
const ChildResolver = require('../resolvers/Child');


module.exports = {

	index() {
		return {
			type: new GraphQLList(ChildType),
			description: 'This will return all the childs found.',
			args: {
				ages: {
					type: GraphQLList(GraphQLInt),
					description: 'Please enter the children ages',
				}
			},
			resolve(parent, args, context, info) {
				return ChildResolver.index(args);
			}
		}
	},

};
