const resolvers = {
	Query: {
		getHello: () => {
			return "Hello!";
		},
		getSong: (_, { id }, { dataSources }) => {
			return dataSources.acnhAPI.getSong(id);
		},
		getRandomQuote: (_, __, { dataSources }) => {
			return dataSources.acnhQuotes.getRandomQuote();
		},
	},
};

module.exports = resolvers;
