const { ApolloServer } = require("apollo-server");
const { ApolloServerLambda } = require("apollo-server-lambda");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const GithubAPI = require("./datasources/github");
const HashnodeAPI = require("./datasources/hashnode");
require("dotenv").config({ path: __dirname + "/.env" });

function createLambdaServer() {
	return new ApolloServerLambda({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				githubAPI: new GithubAPI(),
				hashnodeAPI: new HashnodeAPI(),
			};
		},
		context: () => {
			return {
				githubToken: process.env.GITHUB_TOKEN,
				hashnodeToken: process.env.HASHNODE_TOKEN,
				env: process.env.NODE_ENV,
			};
		},
		introspection: true,
		playground: true,
	});
}

function createLocalServer() {
	return new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				githubAPI: new GithubAPI(),
				hashnodeAPI: new HashnodeAPI(),
			};
		},
		context: () => {
			return {
				githubToken: process.env.GITHUB_TOKEN,
				hashnodeToken: process.env.HASHNODE_TOKEN,
				env: process.env.NODE_ENV,
			};
		},
		introspection: true,
		playground: true,
	});
}

module.exports = { createLambdaServer, createLocalServer };
