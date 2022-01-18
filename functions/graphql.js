const { createLambdaServer } = require("./bundle/server");

const server = createLambdaServer();
console.log{txt: "hi", server}

exports.handler = server.createHandler({
	cors: {
		origin: "*",
		credentials: true,
	},
});
