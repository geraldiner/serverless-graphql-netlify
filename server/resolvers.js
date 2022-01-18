const resolvers = {
	Query: {
		getHello: () => {
			return "Hello!";
		},
		getSong: (_, { id }, { dataSources }) => {
			return dataSources.acnhAPI.getSong(id);
		},
	},
};

module.exports = resolvers;
