const { MongoDataSource } = require("apollo-datasource-mongodb");

class AcnhQuotes extends MongoDataSource {
	async getRandomQuote() {
		const res = await this.findByFields({ source: "Pascal" });
		const rand = Math.floor(Math.random() * res.length + 1);
		return res[rand].quote;
	}
}

module.exports = AcnhQuotes;
