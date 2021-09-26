const { ApolloServer } = require("apollo-server");
const resolvers = require("./bundle/resolvers");
const typeDefs = require("./bundle/schema");
const GithubAPI = require("./bundle/datasources/github");
const HashnodeAPI = require("./bundle/datasources/hashnode");
require("dotenv").config({ path: __dirname + "/.env" });

const server = new ApolloServer({
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

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: "*",
	},
});
