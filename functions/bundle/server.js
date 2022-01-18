const { ApolloServer } = require("apollo-server");
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AcnhAPI = require("./datasources/acnh");

function createLambdaServer() {
	const server = new ApolloServerLambda({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				acnhAPI: new AcnhAPI(),
			};
		},
		introspection: true,
		playground: true,
	});
	return server;
}

function createLocalServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				acnhAPI: new AcnhAPI(),
			};
		},
		introspection: true,
		playground: true,
	});
	return server;
}

module.exports = { createLambdaServer, createLocalServer };
