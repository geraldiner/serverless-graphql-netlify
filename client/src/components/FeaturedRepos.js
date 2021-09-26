import React from "react";
import { useQuery } from "@apollo/client";
import { FeaturedReposQuery } from "../queries/github-queries";
import Loading from "./Loading";
import ProjectCard from "./ProjectCard";

const FeaturedRepos = () => {
	const { loading, error, data } = useQuery(FeaturedReposQuery, {
		pollInterval: 500,
	});
	const featuredRepos = data?.getFeaturedRepos;

	return (
		<div className="p-3 mx-2 lg:mt-8 lg:mx-16">
			<Loading className="w-full p-3 rounded-t-md bg-white" loading={loading} source="GitHub" />
			{error && `Error! ${error.message}`}
			{data &&
				featuredRepos.map((r, index) => {
					return (
						<ProjectCard
							key={index}
							name={r.name}
							commitCount={r.commitCount}
							description={r.description}
							homepageUrl={r.homepageUrl}
							languages={r.languages}
							imageUrl={r.openGraphImageUrl}
							topics={r.topics}
							updatedAt={r.updatedAt}
							repoUrl={r.url}
						/>
					);
				})}
		</div>
	);
};

export default FeaturedRepos;
