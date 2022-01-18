const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getHello: String
		getSong(id: Int!): Song
		getRandomQuote: String
	}
	type Song {
		id: Int
		songName: String
		musicUri: String
		imageUri: String
	}
`;

module.exports = typeDefs;
