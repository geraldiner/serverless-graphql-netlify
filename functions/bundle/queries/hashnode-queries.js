const PostsQuery = `
query {
  user(username: "geraldiner") {
    publicationDomain
    publication {
      posts(page: 0) {
        slug
      }
    }
  }
}
`;

const PostDetailQuery = slug => {
	return `
  query {
    post(slug: "${slug}", hostname: "blog.geraldiner.com") {
      title
      brief
      coverImage
      dateAdded
      totalReactions
      slug
      tags {
        name
      }
    }
  }
  `;
};

module.exports = { PostsQuery, PostDetailQuery };
