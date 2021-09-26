const AboutQuery = `
	query {
		viewer {
			id
			name
			login
			url
			twitterUsername
			bio
			avatarUrl
			location
			status {
				emojiHTML
				message
			}
			isHireable
		}
	}
`;

const FeaturedReposQuery = `
	query {
		viewer {
			id
			pinnedItems(first: 6) {
				nodes {
					... on Repository {
						name
						nameWithOwner
						description
						homepageUrl
						url
						openGraphImageUrl
						updatedAt
						languages(first: 10) {
							nodes {
								name
								color
							}
						}
						defaultBranchRef {
							prefix
							target {
								... on Commit {
									history {
										totalCount
									}
									pushedDate
								}
							}
						}
						repositoryTopics(first: 10) {
							nodes {
								... on RepositoryTopic {
									topic {
										name
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

const RecentReposQuery = `
	query {
		viewer {
			id
			repositories(orderBy: { field: UPDATED_AT, direction: ASC }, last: 6, privacy: PUBLIC, isFork: false) {
				nodes {
					... on Repository {
						name
						nameWithOwner
						description
						homepageUrl
						url
						openGraphImageUrl
						updatedAt
						languages(first: 10) {
							nodes {
								name
								color
							}
						}
						defaultBranchRef {
							prefix
							target {
								... on Commit {
									history {
										totalCount
									}
									pushedDate
								}
							}
						}
						repositoryTopics(first: 10) {
							nodes {
								... on RepositoryTopic {
									topic {
										name
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

const QUERIES = { AboutQuery, FeaturedReposQuery, RecentReposQuery };

module.exports = QUERIES;
