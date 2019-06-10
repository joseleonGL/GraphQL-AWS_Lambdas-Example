'use strict';

const GraphQL = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQ
} = GraphQL;

const ChildType = new GraphQLObjectType({
    name: 'Child',
    description: 'Child Type',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        txid: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        ts: {
            type: GraphQLString
        },
        resourceType: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        givenName: {
            type: GraphQLString
        },
        familyName: {
            type: GraphQLString
        },
        birthDate: {
            type: GraphQLString
        },
        active: {
            type: GraphQLBoolean
        },
        gender: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
        program: {
            type: GraphQLString
        }
    })
});

module.exports = ChildType;