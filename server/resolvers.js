const resolvers = {
	Query: {
		getHello: () => {
			return "Hello!";
		},
		getSong: (_, { id }, { dataSources }) => {
			return dataSources.acnhAPI.getSong(id);
		},
		getRandomQuote: () => {
			return "boop";
		},
	},
};

module.exports = resolvers;
