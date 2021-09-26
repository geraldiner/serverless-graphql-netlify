import { gql } from "@apollo/client";

export const PostsQuery = gql`
	query GetPosts {
		getPosts {
			domain
			posts {
				title
				brief
				coverImage
				dateAdded
				totalReactions
				tags
				slug
			}
		}
	}
`;
