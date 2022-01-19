const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		hello: String
		randomQuote: String
		song(id: Int!): Song
		fish(id: Int!): Fish
	}
	type Song {
		id: Int
		name: String
		musicUri: String
		imageUri: String
	}
	type Fish {
		id: Int
		name: String
		shadowSize: String
	}
`;

module.exports = typeDefs;
