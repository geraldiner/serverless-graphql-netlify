const { RESTDataSource } = require("apollo-datasource-rest");
const { AboutQuery, FeaturedReposQuery, RecentReposQuery } = require("../queries/github-queries");

class GithubAPI extends RESTDataSource {
	willSendRequest(request) {
		request.headers.set("Authorization", `token ${this.context.githubToken}`);
		request.headers.set("Content-Type", "application/graphql");
	}

	constructor() {
		super();
		this.baseURL = "https://api.github.com/graphql";
	}

	async getAbout() {
		try {
			const response = await this.post(this.baseURL, JSON.stringify({ "query": AboutQuery }));
			return response.data.viewer;
		} catch (error) {
			console.error(error);
		}
	}

	async getFeaturedRepos() {
		try {
			const response = await this.post(this.baseURL, JSON.stringify({ "query": FeaturedReposQuery }));
			const repos = await this.transformRepos(response.data.viewer.pinnedItems.nodes);
			return repos;
		} catch (error) {
			console.error(error);
		}
	}

	async getRecentRepos() {
		try {
			const response = await this.post(this.baseURL, JSON.stringify({ "query": RecentReposQuery }));
			const repos = await this.transformRepos(response.data.viewer.repositories.nodes);
			return repos;
		} catch (error) {
			console.error(error);
		}
	}

	transformRepos = async nodes => {
		const repos = [];
		nodes.forEach(n => {
			const r = {
				name: n.name,
				description: n.description,
				homepageUrl: n.homepageUrl,
				updatedAt: this.convertTime(n.updatedAt),
				url: n.url,
				openGraphImageUrl: n.openGraphImageUrl,
			};
			r.commitCount = n.defaultBranchRef.target.history.totalCount;
			r.topics = n.repositoryTopics.nodes;
			r.languages = n.languages.nodes;
			repos.push(r);
		});
		return repos;
	};

	convertTime = dt => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		const readableDate = new Date(dt).toLocaleDateString(undefined, options);
		return readableDate;
	};
}

module.exports = GithubAPI;
