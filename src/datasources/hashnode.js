const { RESTDataSource } = require("apollo-datasource-rest");
const { PostsQuery, PostDetailQuery } = require("../queries/hashnode-queries");

class HashnodeAPI extends RESTDataSource {
	willSendRequest(request) {
		request.headers.set("Authorization", `${this.context.hashnodeToken}`);
		request.headers.set("Content-Type", "application/json");
	}

	constructor() {
		super();
		this.baseURL = "https://api.hashnode.com/";
	}

	async getPosts() {
		try {
			const response = await this.post(this.baseURL, JSON.stringify({ "query": PostsQuery }));
			const userPosts = { domain: response.data.user.publicationDomain };
			userPosts.posts = await this.getPostDetails(response.data.user.publication.posts);
			return userPosts;
		} catch (error) {
			console.error(error);
		}
	}

	async getPostDetails(postSlugs) {
		try {
			const posts = [];
			for (let i = 0; i < postSlugs.length; i++) {
				const query = PostDetailQuery(postSlugs[i].slug);
				const response = await this.post(this.baseURL, JSON.stringify({ "query": query }));
				const postData = response.data.post;
				const post = {
					title: postData.title,
					brief: postData.brief,
					coverImage: postData.coverImage,
					dateAdded: this.convertTime(postData.dateAdded),
					totalReactions: postData.totalReactions,
					tags: postData.tags.map(t => t.name.split(" ").join("")),
					slug: postData.slug,
				};
				posts.push(post);
			}
			return posts;
		} catch (error) {
			console.error(error);
		}
	}

	convertTime = dt => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		const readableDate = new Date(dt).toLocaleDateString(undefined, options);
		return readableDate;
	};
}

module.exports = HashnodeAPI;
