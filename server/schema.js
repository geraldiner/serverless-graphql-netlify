const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getHello: String
	}
`;

module.exports = typeDefs;
