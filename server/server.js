const { ApolloServer } = require("apollo-server");
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
// eslint-disable-next-line no-undef
require("dotenv").config({ path: __dirname + "/.env" });

const AcnhAPI = require("./datasources/acnh");
const AcnhQuotes = require("./datasources/acnh-quotes");

const { MongoClient } = require("mongodb");
// eslint-disable-next-line no-undef
const client = new MongoClient(process.env.MONGODB_URI);
client.connect();

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
				acnhQuotes: new AcnhQuotes(client.db().collection("quotes")),
			};
		},
		introspection: true,
		playground: true,
	});
	return server;
}

module.exports = { createLambdaServer, createLocalServer };
