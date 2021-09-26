const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getAbout: About
		getFeaturedRepos: [Repository]
		getRecentRepos: [Repository]
		getPosts: Posts
	}
	type UserStatus {
		emojiHTML: String
		message: String
	}
	type About {
		id: String
		name: String
		bio: String
		avatarUrl: String
		location: String
		url: String
		status: UserStatus
		company: String
		isHireable: Boolean
	}
	type Commit {
		message: String
		pushedAt: String
	}
	type Repository {
		name: String
		description: String
		homepageUrl: String
		updatedAt: String
		url: String
		openGraphImageUrl: String
		commitCount: Int
		# branchCount: Int
		languages: [Language]
		topics: [RepositoryTopic]
	}
	type Language {
		color: String
		name: String
	}
	type RepositoryTopic {
		topic: Topic
	}
	type Topic {
		name: String
	}
	type Posts {
		domain: String
		posts: [Post]
	}
	type Post {
		title: String
		brief: String
		coverImage: String
		dateAdded: String
		totalReactions: Int
		tags: [String]
		slug: String
	}
`;

module.exports = typeDefs;
