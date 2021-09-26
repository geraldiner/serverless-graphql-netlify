import React from "react";
import { useQuery } from "@apollo/client";
import { FeaturedReposQuery } from "./queries/github-queries";

const App = () => {
	const { loading, error, data } = useQuery(FeaturedReposQuery, {
		pollInterval: 500,
	});
	const featuredRepos = data?.getFeaturedRepos;

	if (loading) return `<div>Loading...</div>`;
	if (error) return `<div>Error: ${error.message}</div>`;

	return (
		<div className="p-3 mx-2 lg:mt-8 lg:mx-16">
			{data &&
				featuredRepos.map(r => {
					return <p>{r.name}</p>;
				})}
		</div>
	);
};

export default App;
