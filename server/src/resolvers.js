const resolvers = {
	Query: {
		getAbout: async (_, __, { dataSources }) => {
			const data = await dataSources.githubAPI.getAbout();
			return data;
		},
		getFeaturedRepos: async (_, __, { dataSources }) => {
			const data = await dataSources.githubAPI.getFeaturedRepos();
			return data;
		},
		getRecentRepos: async (_, __, { dataSources }) => {
			const data = await dataSources.githubAPI.getRecentRepos();
			return data;
		},
		getPosts: async (_, __, { dataSources }) => {
			const data = await dataSources.hashnodeAPI.getPosts();
			return data;
		},
	},
};

module.exports = resolvers;
