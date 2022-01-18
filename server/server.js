const { ApolloServer } = require("apollo-server");
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;
// eslint-disable-next-line no-undef
require("dotenv").config({ path: __dirname + "/.env" });

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AcnhAPI = require("./datasources/acnh");
const AcnhQuotes = require("./datasources/acnh-quotes");
const { MongoClient } = require("mongodb");
// eslint-disable-next-line no-undef
const client = new MongoClient(process.env.MONGODB_URI);
client.connect();

async function createLambdaServer() {
	const server = new ApolloServerLambda({
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

function createLocalServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				acnhAPI: new AcnhAPI(),
				acnhQuotes: new AcnhQuotes(client.db("acnh-quotes").collection("quotes")),
			};
		},
		introspection: true,
		playground: true,
	});
	return server;
}

module.exports = { createLambdaServer, createLocalServer };
