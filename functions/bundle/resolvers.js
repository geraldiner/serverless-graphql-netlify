const resolvers = {
	Query: {
		getHello: () => {
			return "Hello!";
		},
	},
};

module.exports = resolvers;
