const { createLambdaServer } = require("./bundle/server");

const server = createLambdaServer();

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: "*",
	},
});
