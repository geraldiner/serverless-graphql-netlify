import React from "react";
import { useQuery } from "@apollo/client";
import { RecentReposQuery } from "../queries/github-queries";
import Loading from "./Loading";
import ProjectCard from "./ProjectCard";

const RecentRepos = () => {
	const { loading, error, data } = useQuery(RecentReposQuery);
	const recentRepos = data?.getRecentRepos;

	return (
		<div className="p-3 mx-2 lg:mx-16">
			<Loading loading={loading} source="GitHub" />
			{error && `Error! ${error.message}`}
			{data &&
				recentRepos.map((r, index) => {
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

export default RecentRepos;
