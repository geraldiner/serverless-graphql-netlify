const ApolloServerLocal = require("apollo-server").ApolloServer;
const { ApolloServer: ApolloServerLambda } = require("apollo-server-lambda").ApolloServer;
const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
	type Query {
		hello: String
	}
`;

const resolvers = {
	Query: {
		hello: () => "Hi! Love from @stemmlerjs 🤠.",
	},
};

function createLambdaServer() {
	return new ApolloServerLambda({
		typeDefs,
		resolvers,
		introspection: true,
		playground: true,
	});
}

function createLocalServer() {
	return new ApolloServerLocal({
		typeDefs,
		resolvers,
		introspection: true,
		playground: true,
	});
}

module.exports = { createLambdaServer, createLocalServer };
