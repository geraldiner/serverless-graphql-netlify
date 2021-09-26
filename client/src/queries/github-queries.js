import { gql } from "@apollo/client";

export const AboutQuery = gql`
	query GetAbout {
		getAbout {
			name
			bio
			avatarUrl
			location
			url
			status {
				emojiHTML
				message
			}
			company
			isHireable
		}
	}
`;

export const FeaturedReposQuery = gql`
	query GetFeaturedRepos {
		getFeaturedRepos {
			name
			description
			homepageUrl
			updatedAt
			url
			openGraphImageUrl
			commitCount
			languages {
				name
				color
			}
			topics {
				topic {
					name
				}
			}
		}
	}
`;

export const RecentReposQuery = gql`
	query GetRecentRepos {
		getRecentRepos {
			name
			description
			homepageUrl
			updatedAt
			url
			openGraphImageUrl
			commitCount
			languages {
				name
			}
			topics {
				topic {
					name
				}
			}
		}
	}
`;
