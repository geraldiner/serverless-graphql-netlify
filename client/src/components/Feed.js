import React from "react";
import { useQuery } from "@apollo/client";
import { PostsQuery } from "../queries/hashnode-queries";
import Loading from "./Loading";
import BlogCard from "./BlogCard";

const Feed = () => {
	const { loading, error, data } = useQuery(PostsQuery, {
		pollInterval: 500,
	});
	const userPosts = data?.getPosts;

	return (
		<div className="p-3 mx-2 lg:mt-8 lg:mx-16">
			<Loading className="w-full p-3 rounded-t-md bg-white" loading={loading} source="Hashnode" />
			{error && `Error! ${error.message}`}
			{data &&
				userPosts.posts.map((p, index) => {
					return (
						<BlogCard
							key={index}
							domain={userPosts.domain}
							title={p.title}
							brief={p.brief}
							coverImage={p.coverImage}
							dateAdded={p.dateAdded}
							totalReactions={p.totalReactions}
							tags={p.tags}
							slug={p.slug}
						/>
					);
				})}
			{data && (
				<div className="w-full text-center">
					<a
						href={`https://${userPosts.domain}`}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-md inline-block w-full lg:w-2/5 p-3 bg-blue text-white font-bold hover:bg-gray-600"
					>
						See More Posts
					</a>
				</div>
			)}
		</div>
	);
};

export default Feed;
