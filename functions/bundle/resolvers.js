const resolvers = {
	Query: {
		hello: () => {
			return "Hello!";
		},
		song: (_, { id }, { dataSources }) => {
			return dataSources.acnhAPI.getSongById(id);
		},
		randomQuote: (_, __, { dataSources }) => {
			return dataSources.acnhQuotes.getRandomQuote();
		},
		fish: (_, { id }, { dataSources }) => {
			return dataSources.acnhAPI.getFishById(id);
		},
	},
};

module.exports = resolvers;
