const { ApolloServer } = require("apollo-server");
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

function createLambdaServer() {
	const server = new ApolloServerLambda({
		typeDefs,
		resolvers,
		playground: true,
	});
	return server;
}

function createLocalServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		introspection: true,
		playground: true,
	});
	return server;
}

module.exports = { createLambdaServer, createLocalServer };
